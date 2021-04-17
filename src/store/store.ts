import { rootReducer } from './root-reducer';
import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import logger from 'redux-logger';
import { IRootStore } from '../types';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, IRootStore, unknown, Action>