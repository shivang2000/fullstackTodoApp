import { baseApi } from "./baseApiSlice";

export const authApi = baseApi.injectEndpoints({ 
    endpoints: builder => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: 'authentication/login/token/',
                method: 'POST',
                body: {
                    username,
                    password
                },
                keepUnusedDataFor: 0
            }),
            invalidatesTags: ['Task']
        }),
        register: builder.mutation({
            query: ({username, email, password}) => ({
                url: 'authentication/register/',
                method: 'POST',
                body: {
                    username,
                    email,
                    password
                },
            })
        }),
        refresh: builder.mutation({
            query: ({refreshToken}) => ({
                url: 'authentication/login/token/refresh',
                method: 'POST',
                body: {
                    'refresh': refreshToken,
                }
            })
        }),
    })
});

export const { 
    useLoginMutation, 
    useRegisterMutation,
    useRefreshMutation
} = authApi;
