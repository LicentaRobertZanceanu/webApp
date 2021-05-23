import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"
import queryString from 'query-string'
import { SongsState } from "../../types"

export const songsReducer = {
    resetSongsToInitialState: (state: SongsState, { payload }: PayloadAction<{}>) => {
        state.songs = []
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
    'songs/getSongs',
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
    'songs/getSongsByArtistId',
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
    'songs/getSongsByGenreId',
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
    'songs/likeSong',
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
    'songs/dislikeSong',
    async ({
        songId
    }: {
        songId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'delete',
                endpoint: `/likes/${songId}`
            })

            return response
        } catch (error) {
            return error
        }
    }
)