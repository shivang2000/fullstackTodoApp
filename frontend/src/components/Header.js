import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderConatiner>
            <HeaderItem>
                <h2>ToDO App</h2>
            </HeaderItem>
            <HeaderItem>
                <h2>Login</h2>
            </HeaderItem>
        </HeaderConatiner>
    )
}

export default Header;

const HeaderConatiner = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-item: center;
    margin: 1rem;
`
const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    padding
`