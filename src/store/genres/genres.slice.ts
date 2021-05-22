import { createSlice } from '@reduxjs/toolkit'
import { genresReducer, getGenres } from '.'
import { IRootStore, GenresState } from '../../types'

const initialState: GenresState = {
    genres: [],
    loading: false,
    error: ''
}

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: genresReducer,
    extraReducers: {
        [getGenres.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.genres = payload
        },
        [getGenres.rejected.type]: (state, { payload }) => {
            console.log('payload', payload)
            state.loading = false
            if (payload) {
                state.error = payload
            }
        },
        [getGenres.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        }
    }
})

export const genresSelector = (state: IRootStore) => state.genres
