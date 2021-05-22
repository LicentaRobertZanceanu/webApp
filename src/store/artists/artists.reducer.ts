import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"
import queryString from 'query-string'

export const artistsReducer = {}

type artistsQueryParams = {
    page: number
    limit: number
}

export const getArtists = createAsyncThunk(
    'artists/getArtists',
    async ({
        queryParams
    }: { queryParams: artistsQueryParams }) => {
        try {
            const query = queryString.stringify(queryParams)
            let url = `/artists?${query}`
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