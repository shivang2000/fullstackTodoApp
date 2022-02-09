import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://full-stack-todo-app-backend.herokuapp.com',
        baseUrl: process.env.REACT_APP_BACKENDAPIURL,
        // baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token

            // console.log(headers)
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            // headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            // headers.set('Access-Control-Allow-Credentials', 'true');
          
            // console.log(process.env.backendApiUrl)

            return headers
        }
    }),
    endpoints: builder => ({})
})

// console.log(process.env.backendApiUrl)