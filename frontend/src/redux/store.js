import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApiSlice'
import { taskApi } from './taskApi'

export default configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware)
})