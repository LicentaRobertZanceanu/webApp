import { createSlice } from '@reduxjs/toolkit'
import { artistsReducer, getArtists } from '.'
import { IRootStore, ArtistsState } from '../../types'

const initialState: ArtistsState = {
    artists: [],
    loading: false,
    error: ''
}

export const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: artistsReducer,
    extraReducers: {
        [getArtists.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.artists = payload.documents
        },
        [getArtists.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getArtists.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        }
    }
})

export const artistsSelector = (state: IRootStore) => state.artists