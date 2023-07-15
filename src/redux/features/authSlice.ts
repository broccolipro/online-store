import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRegisterData } from "../api/types";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },

        register: (state, action: PayloadAction<IRegisterData>) => {
            
        }
    }
});

const {  } = authSlice;