import { createSlice } from '@reduxjs/toolkit'
import { IRootStore, LoggedInUser, UsersState } from '../../types'
import { getLoggedInUserData, updateUserInformation, usersReducer } from './user.reducer'

const initialState: UsersState = {
    loading: false,
    error: '',
    loggedInUser: {
        email: '',
        firstName: '',
        lastName: '',
        id: ''
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: usersReducer,
    extraReducers: {
        [getLoggedInUserData.fulfilled.type]: (state, { payload }) => {
            state.loggedInUser = {
                ...payload as LoggedInUser,
                id: payload._id
            }
            state.loading = false
        },
        [getLoggedInUserData.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getLoggedInUserData.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [updateUserInformation.fulfilled.type]: (state) => {
            state.loading = false
        },
        [updateUserInformation.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [updateUserInformation.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        }
    }
})


export const usersSelector = (state: IRootStore) => state.users