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

type songsQueryParams = {
    page: number
    limit: number
    genreId?: string
    artistId?: string
}

const getSongsApi = async ({
    queryParams
}: {
    queryParams: songsQueryParams
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
    }: { queryParams: songsQueryParams }
    ) => {
        try {
            const response = await getSongsApi({ queryParams })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getSongsForInfiniteScroll = createAsyncThunk(
    'songs/getSongsForInfiniteScroll',
    async ({
        queryParams
    }: { queryParams: songsQueryParams }) => {
        try {
            const response = await getSongsApi({ queryParams })
            return response
        } catch (error) {
            return error
        }
    }
)