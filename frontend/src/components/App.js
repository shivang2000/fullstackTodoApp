import React, { useEffect } from 'react'
import styled from 'styled-components';
import Header from './Header';
import Tasks from './Tasks';
import Register from './Register'

import jwt_decode from 'jwt-decode'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { useRefreshMutation } from '../redux/authApi';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';

const App = () => {

    const dispatch = useDispatch()

    const [refresh] = useRefreshMutation({})

    useEffect(() => {
        const refreshToken = localStorage.getItem('refresh-token') 
        if (refreshToken){ 
            refresh({refreshToken}).then(res => {
                const decodedtoken = jwt_decode(res.data.access)
                dispatch(setCredentials({
                    token: res.data.access,
                    refresh: refreshToken,
                    username: decodedtoken.username
                }))
            })
        }
    }, [false])
        

    return (
        <AppContainer>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Tasks />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AppContainer>
    )
}

export default App;


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
