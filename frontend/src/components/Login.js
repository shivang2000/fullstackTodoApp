import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useLoginMutation } from '../redux/authApi';
import { setCredentials } from '../redux/authSlice';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/authSlice'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading, isError, error }] = useLoginMutation({})

    // console.log(process.env.NODE_ENV)
    // console.log(process.env.REACT_APP_BACKENDAPIURL)
    // console.log('asd',process.env.REACT_APP_NAME)

    const handleLogin = async (e) => {
        e.preventDefault()
        // try {
        //     const data = await login({ username, password }).unwrap();
        //     console.log(data)
        //     const decodedtoken = jwt_decode(data.access)
        //     dispatch(setCredentials({
        //         token: data.access,
        //         refresh: data.refresh,
        //         username: decodedtoken.username
        //     }))
        // }
        login({ username, password }).then(res =>  {
            const decodedtoken = jwt_decode(res.data.access)
            dispatch(setCredentials({
                token: res.data.access,
                refresh: res.data.refresh,
                username: decodedtoken.username
            }))
            localStorage.setItem('refresh-token', res.data.refresh)
            navigate('/')
        }).catch(err => {
            console.log('in promise catch',err)
        })
    }

    const user = useSelector(selectUser)    

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const renderError = () => {
        if (isError) {
            return <p>{error.data.detail}</p>
        }
    }

    return (
        <LoginContainer>
            <h2>Login</h2>
            <FormContainer onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder='username' />    
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='password' />    
                <button type='submit' >Login</button>
                {(isLoading) ? <p>Loading...</p> : null}
                {renderError()}
            </FormContainer>        
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 1rem;
    border-radius: 2rem;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
`
