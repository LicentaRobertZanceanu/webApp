import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"
import queryString from 'query-string'
import { ArtistsState } from "../../types"

export const artistsReducer = {
    resetArtistsToInitialState: (state: ArtistsState, { payload }: PayloadAction<{}>) => {
        state.artists = []
        state.pagination = {
            page: 1,
            total: 0,
            pageSize: 0,
            numberOfPages: 0
        }
    }
}

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