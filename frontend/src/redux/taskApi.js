import { baseApi } from "./baseApiSlice";

export const taskApi = baseApi.injectEndpoints({
    endpoints: builder => ({
      getTasks: builder.query({
        query: () => '/todo/',
        providesTags: ['Task']
      }),
      createTask: builder.mutation({
        query: ( task ) => ({
          url: '/todo/',
          method: 'POST',
          body: task,
        }),
        transformResponse: (res) => (console.log(res)),
        invalidatesTags: ['Task']
      }),
      deleteTask: builder.mutation({
        query: ({taskId}) => ({
          url: `/todo/${taskId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Task']
      })
    })
  })
  


export const { 
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation
} = taskApi

export const selectTasksResult = taskApi.endpoints.getTasks.select()

