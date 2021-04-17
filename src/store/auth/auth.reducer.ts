import { PayloadAction } from "@reduxjs/toolkit"
import { SignupFormValues } from "../../components/forms"
import { AuthState } from "../../types"

export const authReducers = {
    setEmail: (
        state: AuthState,
        { payload }: PayloadAction<{ email: string }>
    ) => {
        state.email = payload.email
    },
    loginUser: (
        state: AuthState,
        { payload }: PayloadAction<{ email: string, password: string }>
    ) => {
        state.email = payload.email
        state.password = payload.password
    },
    signUpUser: (
        state: AuthState,
        { payload }: PayloadAction<SignupFormValues>
    ) => {
        state.email = payload.email
        state.password = payload.password
    }
}