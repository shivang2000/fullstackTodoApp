import React from 'react';
import styled from 'styled-components';
import Switch from '../Styled-Component/Switch';

const SingleTask = () => {
    return (
        <SingleTaskContainer>
            <div>here are your task to be done</div>
            <DeleteButton>Delete Task</DeleteButton>
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

const DeleteButton = styled.button`
    background: rgb(60,60,60);
    color: rgb(174,193,198);
    border-radius: .5rem;
    text-align: center;
    display: flex;
    font-size: 1.5rem;
` 