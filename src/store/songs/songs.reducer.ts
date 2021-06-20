import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"
import queryString from 'query-string'
import { SongsState } from "../../types"

export const songsReducer = {
    resetSongsToInitialState: (state: SongsState, { payload }: PayloadAction<{}>) => {
        state.songs = []
        state.recommendations = []
        state.likedSongs = []
        state.pagination = {
            page: 1,
            total: 0,
            pageSize: 0,
            numberOfPages: 0
        }
    }
}

export interface SongsQueryParams {
    page: number
    limit: number
    genreId?: string
    artistId?: string
    searchBy?: string
}

interface songsByArtistsIdQueryParams extends SongsQueryParams {
    artistId: string
}

interface SongsByGenreIdQueryParams extends SongsQueryParams {
    genreId: string
}

const getSongsApi = async ({
    queryParams
}: {
    queryParams: SongsQueryParams
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = queryString.stringify(queryParams)
            let url = `/songs?${query}`
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: url
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}

export const getSongs = createAsyncThunk(
    'songs/getSongs-Request',
    async ({
        queryParams
    }: { queryParams: SongsQueryParams }
    ) => {
        try {
            const response = await getSongsApi({ queryParams })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getSongsByArtistId = createAsyncThunk(
    'songs/getSongsByArtistId-Request',
    async ({
        queryParams
    }: { queryParams: songsByArtistsIdQueryParams }
    ) => {
        try {
            const response = await getSongsApi({ queryParams })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getSongsByGenreId = createAsyncThunk(
    'songs/getSongsByGenreId-Request',
    async ({
        queryParams
    }: { queryParams: SongsByGenreIdQueryParams }
    ) => {
        try {
            const response = await getSongsApi({ queryParams })
            return response
        } catch (error) {
            return error
        }
    }
)

export const likeSong = createAsyncThunk(
    'songs/likeSong-Request',
    async ({
        songId
    }: {
        songId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'post',
                endpoint: `/likes/${songId}`
            })

            return response
        } catch (error) {
            return error
        }
    }
)

export const dislikeSong = createAsyncThunk(
    'songs/dislikeSong-Request',
    async ({
        songId,
        isFromFavourites
    }: {
        songId: string
        isFromFavourites?: boolean
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'delete',
                endpoint: `/likes/${songId}`
            })

            return {
                response,
                isFromFavourites: !!isFromFavourites,
                songId
            }
        } catch (error) {
            return error
        }
    }
)

export const getFavouriteSongs = createAsyncThunk(
    'songs/getFavouritesSongs-Request',
    async (
        {
            queryParams
        }:
            {
                queryParams: {
                    page: number
                    limit: number
                }
            }
    ) => {
        const query = queryString.stringify(queryParams)
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: `/likes?${query}`
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getSongById = createAsyncThunk(
    'songs/getSongById-Request',
    async ({
        songId
    }: {
        songId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: `/songs/${songId}`
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const addListenedSong = createAsyncThunk(
    'songs/addListenedSong-Request',
    async ({
        songId
    }: {
        songId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'post',
                endpoint: `/listened/${songId}`
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getRecommendedSongs = createAsyncThunk(
    'songs/getRecommendedSongs-Request',
    async () => {
        try {
            const response = await apiFetch({
                api: 'recommendations',
                method: 'get',
                endpoint: '/recommendations'
            })
            return response
        } catch (error) {
            return error
        }
    }
)