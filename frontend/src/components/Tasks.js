import React from 'react'
import styled from 'styled-components';
import SingleTask from './SingleTask';

const Tasks = () => {
    return (
        <TasksContainer>
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
        </TasksContainer>
    );
}

export default Tasks;

const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: auto;
    padding: 1rem;
    border-radius: 1rem;
    max-width: 750px;
    width: 65vw ;
    font-size: 2rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`