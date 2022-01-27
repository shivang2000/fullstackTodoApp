import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Tasks from './Tasks';

const App = () => {

    return (
        <AppContainer>
            <Header />
            <Tasks />
        </AppContainer>
    )
}

export default App;


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
