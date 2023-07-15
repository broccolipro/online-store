import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './types';
import { setUser } from '../features/userSlice';

const BASE_URL = 'http://192.168.18.157:4000/api';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getProfile: builder.query<IUser, null>({
            query() {
                return {
                    url: 'profile',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token') || '').data.access_token}`
                    },
                }
            },
            
        })
    })
})

export const { useGetProfileQuery} = userApi;