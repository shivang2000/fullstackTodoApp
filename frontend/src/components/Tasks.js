import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {  useGetTasksQuery } from '../redux/taskApi';
import AddTask from './AddTask';
import LoadingSpinner from './LoadingSpinner';
import SingleTask from './SingleTask';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const Tasks = () => {

    const navigate = useNavigate()

    const user = useSelector(selectUser)    
    
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [false])

    const skip = user ? true : false
    const {data: tasks = [], isLoading, isSuccess} = useGetTasksQuery({skip})
    

    let content
    if (isLoading && !(tasks.length) ){
        content = (<LoadingSpinner />)
    }else if (isSuccess) {
        if (tasks.length){
            content = (tasks.map(task => <SingleTask task={task} key={task.id} />))
        }else {
            content = <p>No Tasks.</p>
        }
        // content = (tasks.map(task => <SingleTask task={task} key={task.id} />))
    }

    return (
        <TasksContainer >
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
    margin-bottom: min(2rem)
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
