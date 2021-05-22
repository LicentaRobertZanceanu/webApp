import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { apiFetch } from "../../utils"

export const genresReducer = {}

export const getGenres = createAsyncThunk(
    'genres/getGenres',
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