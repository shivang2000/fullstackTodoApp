import { baseApi } from "./baseApiSlice";

export const taskApi = baseApi.injectEndpoints({
    endpoints: builder => ({
      getTasks: builder.query({
        query: () => '/todo/',
        providesTags: (result, error, args) => {
          // console.log(result);
          return (
            result ? 
              result.map(({id}) => ({ type: 'Task', id })) :
              ['task']
          )
        }
      }),
      createTask: builder.mutation({
        query: ( task ) => ({
          url: '/todo/',
          method: 'POST',
          body: task,
        }),
        invalidatesTags: ['Task']
      }),
      deleteTask: builder.mutation({
        query: ({taskId}) => ({
          url: `/todo/${taskId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Task']
      }),
      updateTask: builder.mutation({
          query: ({taskId, body}) => ({
            url: `/todo/${taskId}/`,
            method: 'PUT',
            body,
          }),
          invalidatesTags: (result, error, args) => [{ type: 'Task', id: args.taskId }]
        })
      })
  })
  


export const { 
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApi

export const selectTasksResult = taskApi.endpoints.getTasks.select()

