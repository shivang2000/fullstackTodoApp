import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Tasks from './Tasks';
import Register from './Register'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Login from './Login';

const App = () => {

    
    
        

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
