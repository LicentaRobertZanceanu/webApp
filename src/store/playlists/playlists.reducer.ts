import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { AddPlaylistFormValues } from "../../components/forms"
import { PlaylistsState } from "../../types"
import { apiFetch } from "../../utils"

export const playlistsReducer = {
}

export const createPlaylist = createAsyncThunk(
    'playlists/createPlaylist-Request',
    async ({
        values,
        callback
    }: {
        values: AddPlaylistFormValues,
        callback: () => void
    }) => {
        try {
            const response = apiFetch({
                api: 'music',
                method: 'post',
                endpoint: '/playlists',
                body: values
            })
            callback()
            return response
        } catch (error) {
            return error
        }
    }
)

export const getPlaylists = createAsyncThunk(
    'playlists/getPlaylists-Request',
    async () => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: '/playlists',
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const deletePlaylist = createAsyncThunk(
    'playlists/deletePlaylist-Request',
    async ({
        playlistId,
        dispatch
    }: {
        playlistId: string
        dispatch: Dispatch<any>
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'delete',
                endpoint: `/playlists/${playlistId}`
            })
            dispatch(getPlaylists())
            return response
        } catch (error) {
            return error
        }
    }
)

export const deleteSongFromPlaylist = createAsyncThunk(
    'playlists/deleteSongFromPlaylist-Request',
    async ({
        playlistId,
        songId,
        dispatch
    }: {
        playlistId: string
        songId: string
        dispatch: Dispatch<any>
    }) => {
        try {
            const response = await apiFetch({
                method: 'delete',
                endpoint: `/playlists/${playlistId}/songs/${songId}`,
                api: 'music'
            })
            dispatch(getSongsFromPlaylist({ playlistId }))
            return response
        } catch (error) {
            return error
        }
    }
)

export const addSongToPlaylist = createAsyncThunk(
    'playlists/addSongToPlaylist-Request',
    async ({
        playlistId,
        songId,
        callback
    }: {
        playlistId: string
        songId: string
        callback: () => void
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'post',
                endpoint: `/playlists/${playlistId}/songs/${songId}`
            })
            callback()
            return response
        } catch (error) {
            return error
        }
    }
)

export const getSongsFromPlaylist = createAsyncThunk(
    'playlists/getSongsFromPlaylist-Request',
    async ({
        playlistId
    }: {
        playlistId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: `/playlists/${playlistId}/songs`
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getPlaylistById = createAsyncThunk(
    'playlists/getPlaylistById-Request',
    async ({
        playlistId
    }: {
        playlistId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: `/playlists/${playlistId}`
            })
            return response
        } catch (error) {
            return error
        }
    }
)