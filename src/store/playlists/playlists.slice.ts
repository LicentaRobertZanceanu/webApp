import { createSlice } from '@reduxjs/toolkit'
import { playlistsReducer } from '.'
import { IRootStore, PlaylistsState } from '../../types'

const initialState: PlaylistsState = {
    playlists: [],
    loading: false,
    error: ''
}

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: playlistsReducer,
    extraReducers: {}
})

export const playlistsSelector = (state: IRootStore) => state.playlists
