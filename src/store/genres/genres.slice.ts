import { createSlice } from '@reduxjs/toolkit'
import { genresReducer, getGenres } from '.'
import { IRootStore, GenresState } from '../../types'
import { getGenreById } from './genres.reducer'

const initialState: GenresState = {
    genres: [],
    genre: {
        _id: '',
        name: '',
        lastFmTag: ''
    },
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
            state.loading = false
            if (payload) {
                state.error = payload
            }
        },
        [getGenres.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getGenreById.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.genre = payload
        },
        [getGenreById.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getGenreById.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        }
    }
})

export const genresSelector = (state: IRootStore) => state.genres
