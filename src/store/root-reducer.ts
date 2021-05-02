import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { usersSlice } from './user'

export const rootReducer = combineReducers({
   auth: authSlice.reducer,
   users: usersSlice.reducer
})