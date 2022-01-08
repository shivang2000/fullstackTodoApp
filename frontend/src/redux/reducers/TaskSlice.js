import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo: [],
    loading: true,
}

const TaskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {

    }
})