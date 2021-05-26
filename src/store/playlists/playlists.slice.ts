import { createSlice } from '@reduxjs/toolkit'
import { playlistsReducer } from '.'
import { IRootStore, PlaylistsState } from '../../types'
import { addSongToPlaylist, createPlaylist, deletePlaylist, deleteSongFromPlaylist, getPlaylistById, getPlaylists, getSongsFromPlaylist } from './playlists.reducer'
import { useDispatch } from 'react-redux'

const initialState: PlaylistsState = {
    playlists: [],
    loading: false,
    error: '',
    playlist: {
        _id: '',
        name: ''
    },
    songs: []
}

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: playlistsReducer,
    extraReducers: {
        [createPlaylist.fulfilled.type]: (state) => {
            state.loading = false
        },
        [createPlaylist.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [createPlaylist.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getPlaylists.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.playlists = payload
        },
        [getPlaylists.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getPlaylists.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [deletePlaylist.fulfilled.type]: (state) => {
            state.loading = false
        },
        [deletePlaylist.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [deletePlaylist.pending.type]: (state) => {
            state.loading = true
        },
        [deleteSongFromPlaylist.fulfilled.type]: (state) => {
            state.loading = false
        },
        [deleteSongFromPlaylist.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [deleteSongFromPlaylist.pending.type]: (state) => {
            state.loading = true
        },
        [addSongToPlaylist.fulfilled.type]: (state) => {
            state.loading = false
        },
        [addSongToPlaylist.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [addSongToPlaylist.pending.type]: (state) => {
            state.loading = true
        },
        [getSongsFromPlaylist.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.songs = payload
        },
        [getSongsFromPlaylist.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getSongsFromPlaylist.pending.type]: (state) => {
            state.loading = true
        },
        [getPlaylistById.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.playlist = payload
        },
        [getPlaylistById.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getPlaylistById.pending.type]: (state) => {
            state.loading = true
        },
    }
})

export const playlistsSelector = (state: IRootStore) => state.playlists
