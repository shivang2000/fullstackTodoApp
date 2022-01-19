import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectTasksResult, useGetTasksQuery } from '../redux/taskApi';
import AddTask from './AddTask';
import LoadingSpinner from './LoadingSpinner';
// import { useGetTaskQuery } from '../redux/taskApi';
import SingleTask from './SingleTask';

const Tasks = () => {

    const tasks1 = useSelector(selectTasksResult)
    console.log(tasks1)

    const {data: tasks = [], isLoading, isSuccess, isError, error} = useGetTasksQuery()
    

    let content
    if (isLoading && !(tasks.length) ){
        content = (<LoadingSpinner />)
    }else if (isSuccess) {
        content = (tasks.map(task => <SingleTask task={task} key={task.id} />))
    }

    return (
        <TasksContainer>
            <AddTask />
            {content}
        </TasksContainer>
    )
}

export default Tasks;

const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    margin: auto;
    padding: 1rem;
    border-radius: 2rem;
    max-width: 85vw ;
    max-height: 80vh;
    font-size: 2rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
    
`