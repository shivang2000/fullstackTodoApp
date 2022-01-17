import { baseApi } from "./baseApiSlice";

export const taskApi = baseApi.injectEndpoints({
    endpoints: builder => ({
      getTasks: builder.query({
        query: () => '/todo/',
        method: 'GET'
      })
    })
  })
  


export const { useGetTasksQuery } = taskApi

export const selectTasksResult = taskApi.endpoints.getTasks.select()

