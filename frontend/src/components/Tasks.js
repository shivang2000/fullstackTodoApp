import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectTasksResult, useGetTasksQuery } from '../redux/taskApi';
// import { useGetTaskQuery } from '../redux/taskApi';
import SingleTask from './SingleTask';

const Tasks = () => {

    const tasks1 = useSelector(selectTasksResult)
    console.log(tasks1)

    const {data: tasks = [], isLoading, isSuccess, isError, error} = useGetTasksQuery()

    if (isSuccess){
        console.log(tasks)
        return (
            <TasksContainer>
                <SingleTask />
            </TasksContainer>
        )
    }

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