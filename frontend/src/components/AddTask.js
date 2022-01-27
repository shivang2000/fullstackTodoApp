import React, { useState } from "react";
import styled from "styled-components";
import { useCreateTaskMutation } from "../redux/taskApi";

const AddTask = () => {
    const [task, setTask] = useState('')
    const [createTask, {isLoading}] = useCreateTaskMutation()

    const handleOnSubmit = async() => {
        await createTask({
            whattodo: task
        })
        setTask('')
    }

    const inputValue = isLoading ? (task + ' Adding your Task') : ''

    return (
        
        <AddTaskContainer>
            <form onSubmit={handleOnSubmit}>
                <input type='text' value={isLoading ? inputValue : task} onChange={e => setTask(e.target.value)}    />
            </form>
        </AddTaskContainer>
    )
}

export default AddTask;

const AddTaskContainer = styled.div``

