import { createSlice } from '@reduxjs/toolkit'
import { getSongs, songsReducer } from '.'
import { IRootStore, SongsState } from '../../types'

const initialState: SongsState = {
    loading: false,
    songs: [],
    song: {},
    error: ''
}

export const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: songsReducer,
    extraReducers: {
        [getSongs.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.songs = payload.documents
        },
        [getSongs.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getSongs.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        }
    }
})

export const songsSelector = (state: IRootStore) => state.songs
