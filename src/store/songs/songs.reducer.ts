import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"
import queryString from 'query-string'

export const songsReducer = {}

type songsQueryParams = {
    page: number
    limit: number
    genreId?: string
    artistId?: string
}

export const getSongs = createAsyncThunk(
    'songs/getSongs',
    async ({
        queryParams
    }: { queryParams: songsQueryParams }
    ) => {
        try {
            const query = queryString.stringify(queryParams)
            let url = `/songs?${query}`
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: url
            })
            return response
        } catch (error) {
            return error
        }
    }
)