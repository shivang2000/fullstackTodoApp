import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    refresh: null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setCredentials: (state, payload) => {
            state.user = payload.payload.username
            state.token = payload.payload.token
            state.refresh = payload.payload.refresh
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.refresh = null
        }
    }
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectUser = state => state.auth.user;