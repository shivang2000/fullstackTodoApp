import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { baseApi } from './baseApiSlice'
import { taskApi } from './taskApi'

export default configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware)
})