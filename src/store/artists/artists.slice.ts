import { createSlice } from '@reduxjs/toolkit'
import { artistsReducer, getArtists } from '.'
import { IRootStore, ArtistsState } from '../../types'
import { getArtistById } from './artists.reducer'

const initialState: ArtistsState = {
    artists: [],
    artist: {
        _id: '',
        name: '',
        lastFmId: ''
    },
    loading: false,
    error: '',
    pagination: {
        page: 1,
        total: 0,
        pageSize: 0,
        numberOfPages: 0
    }
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
            state.pagination = {
                page: payload.page,
                total: payload.total,
                pageSize: payload.pageSize,
                numberOfPages: payload.numberOfPages
            }
        },
        [getArtists.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
            state.artists = []
            state.pagination = {
                page: 1,
                total: 0,
                pageSize: 0,
                numberOfPages: 0
            }
        },
        [getArtists.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getArtistById.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.artist = payload
        },
        [getArtistById.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getArtistById.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        }
    }
})

export const { resetArtistsToInitialState } = artistsSlice.actions
export const artistsSelector = (state: IRootStore) => state.artists