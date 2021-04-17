import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from ".."
import { AuthState, IRootStore } from '../../types'
import { authReducers } from './auth.reducer'

export const initialState: AuthState = {
    loading: false,
    email: "",
    password: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: authReducers
})

export const { setEmail, loginUser, signUpUser } = authSlice.actions
export const authSelector = (state: IRootStore) => state.auth