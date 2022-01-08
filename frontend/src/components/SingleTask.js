import React from 'react';
import styled from 'styled-components';
import Switch from '../Styled-Component/Switch';

const SingleTask = () => {
    return (
        <SingleTaskContainer>
            <div>here are your task to be done</div>
            <Switch />
        </SingleTaskContainer>
    )
}

export default SingleTask;

const SingleTaskContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    align-items: center;
`