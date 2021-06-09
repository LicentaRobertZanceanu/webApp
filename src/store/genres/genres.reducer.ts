import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"

export const genresReducer = {}

export const getGenres = createAsyncThunk(
    'genres/getGenres-Request',
    async () => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: '/genres'
            })
            return response
        } catch (error) {
            return error
        }
    }
)

export const getGenreById = createAsyncThunk(
    'genres/getGenreById-Request',
    async ({
        genreId
    }: {
        genreId: string
    }) => {
        try {
            const response = await apiFetch({
                api: 'music',
                method: 'get',
                endpoint: `/genres/${genreId}`
            })
            return response
        } catch (error) {
            return error
        }
    }
)