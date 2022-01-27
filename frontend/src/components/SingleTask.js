import React from 'react';
import styled from 'styled-components';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../redux/taskApi';

const SingleTask = ({ task }) => {
    console.log(task)
    const [deleteTask, {isLoading: isDeleting}] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const handleOnDelete = () => {
        deleteTask({
            taskId: task.id
        })
    }

    const handleStatusChange = () => {
        updateTask({
            taskId: task.id,
            body: {
                'is_completed': !task.is_completed
            } 
        })
    }

    return (
        <SingleTaskContainer>
            <input type='checkbox' defaultChecked={task.is_completed} onClick={handleStatusChange} />
            <div>{task.whattodo}</div>
            <DeleteButton onClick={handleOnDelete} disabled={isDeleting}>{isDeleting ? 'deleting' : 'delete'}</DeleteButton>
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