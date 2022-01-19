import React from 'react';
import styled from 'styled-components';
import { useDeleteTaskMutation } from '../redux/taskApi';

const SingleTask = ({ task }) => {
    
    const [deleteTask, {isLoading: isDeleting}] = useDeleteTaskMutation()

    const handleOnDelete = () => {
        deleteTask({
            taskId: task.id
        })
    }

    return (
        <SingleTaskContainer>
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