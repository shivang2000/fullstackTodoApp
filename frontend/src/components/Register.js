import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {useRegisterMutation} from '../redux/authApi';

const Register = () => {
    const [register, {isLoading, isError, error}] = useRegisterMutation()
    const dispatch  = useDispatch();
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const checkConfirmPassword = () => {
        if (form.password !== form.confirmPassword) {
            return <p>password does not match</p>
        }
    }

    const renderError = () => {
        return (<p>
            {error.data.username}
            {error.data.password}
        </p>)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        if (form.password !== '' && form.password === form.confirmPassword) {
            console.log('registering')
            register({
                username: form.username,
                email: form.email,
                password: form.password
            }).then(res => {
                console.log('res', res)
                navigate('/login')
            })
        }
    }

    return (
        <RegisterContainer>
            <h2>Register</h2>
            <FormContainer onSubmit={handleRegister}>
                <input type="text" name="username" value={form.username} onChange={(e) => setForm({...form, username:e.target.value})} placeholder='username' />
                <input type="text" name="email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} placeholder='email' />
                <input type="password" name="password" value={form.password} onChange={(e) => setForm({...form, password:e.target.value})} placeholder='password' />
                <input type="password" name="confirmpassword" value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword:e.target.value})} placeholder='confirmpassword' />
                {checkConfirmPassword()}
                <button type='submit' >Register</button>
                {isLoading ? <p>Loading...</p> : null}
                {isError ? renderError() : null}
            </FormContainer>
        </RegisterContainer>
    )
}

export default Register

const RegisterContainer = styled.div`
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
