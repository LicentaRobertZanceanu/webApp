import { createSlice } from '@reduxjs/toolkit'
import { AuthData, AuthState, IRootStore } from '../../types'
import { loadAuthDataFromStorage, saveAuthDataInStorage } from '../../utils/auth'
import { authReducers, login, refreshToken, signUp } from './auth.reducer'

const initialState: AuthState = {
    loading: false,
    error: '',
    authData: loadAuthDataFromStorage()
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: authReducers,
    extraReducers: {
        [signUp.fulfilled.type]: (state) => {
            state.loading = false
            state.error = ''
        },
        [signUp.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [signUp.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [login.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            saveAuthDataInStorage(payload as AuthData)
            state.authData = payload
        },
        [login.pending.type]: (state) => {
            state.loading = true
            state.error = ''

        },
        [login.rejected.type]: (state, { payload }) => {
            state.loading = true
            state.error = payload.message
        },
        [refreshToken.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            saveAuthDataInStorage(payload as AuthData)
            state.authData = payload
        },
        [refreshToken.pending.type]: (state) => {
            state.loading = true
        },
        [refreshToken.rejected.type]: (state) => {
            state.loading = false
        }

    }
})

export const { setError, setAuthData, logout } = authSlice.actions
export const authSelector = (state: IRootStore) => state.auth