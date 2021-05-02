import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { LoginFormValues, SignupFormValues } from "../../components/forms"
import { REFRESH_TOKEN_ENDPOINT } from "../../constants/global-constants"
import { AuthData, AuthState } from "../../types"
import { apiFetch } from "../../utils"
import { loadAuthDataFromStorage, saveAuthDataInStorage } from "../../utils/auth"

export const authReducers = {
    setError: (state: AuthState, { payload }: PayloadAction<string>) => {
        state.error = payload
    },
    setAuthData: (state: AuthState, { payload }: PayloadAction<{ authData?: AuthData }>) => {
        let authData = payload.authData
        if (!authData) {
            authData = loadAuthDataFromStorage()
        }

        state.authData = authData
    },
    logout: (state: AuthState, { }: PayloadAction) => {
        const initialStateAuthData: AuthData = {
            refreshToken: '',
            authToken: '',
            expires: 0
        }
        state.authData = initialStateAuthData
        saveAuthDataInStorage(initialStateAuthData)
    }
}

export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({
        values,
        callback
    }: {
        values: SignupFormValues
        callback: () => void
    }, { rejectWithValue }) => {
        try {
            const response = await apiFetch({
                api: 'auth',
                method: 'post',
                endpoint: '/signup',
                body: values
            })
            callback()
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ values }: {
        values: LoginFormValues
    }, { rejectWithValue }) => {
        try {
            const response = await apiFetch({
                api: 'auth',
                method: 'post',
                endpoint: '/login',
                body: values
            })
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const refreshToken = createAsyncThunk(
    'auth/refreshToken',
    async (
        { values }: {
            values: {
                refreshToken: string,
                authToken: string
            }
        }, { rejectWithValue }) => {
        try {
            const response = await apiFetch({
                api: 'auth',
                method: 'get',
                endpoint: REFRESH_TOKEN_ENDPOINT,
                body: values
            })
            return response
        } catch (error) {
            rejectWithValue(error)
        }
    }
)