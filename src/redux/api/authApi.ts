import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginData, ILoginResponse, IRegisterData, IRegisterResponse } from './types';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.18.157:4000/api'
    }),
    endpoints: builder => ({
        registerUser: builder.mutation<IRegisterResponse, IRegisterData>({
            query(data) {
                return {
                    url: 'auth/signup',
                    method: 'POST',
                    body: data,
                }
            }
        }),

        loginUser: builder.mutation<ILoginResponse, ILoginData>({
            query(data) {
                return {
                    url: 'auth/login',
                    method: 'POST',
                    body: data,
                }
            },
        }),

    })
})


export const { useLoginUserMutation, useRegisterUserMutation } = authApi;