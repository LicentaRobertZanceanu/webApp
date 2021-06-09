import { createSlice } from '@reduxjs/toolkit'
import { getSongs, getSongsByArtistId, songsReducer } from '.'
import { IRootStore, Song, SongsState } from '../../types'
import { addListenedSong, dislikeSong, getFavouriteSongs, getRecommendedSongs, getSongById, getSongsByGenreId, likeSong } from './songs.reducer'

const initialState: SongsState = {
    loading: false,
    recommendations: [],
    songs: [],
    likedSongs: [],
    song: {
        _id: '',
        name: '',
        lastFmId: '',
        lastFmUrl: '',
        youtubeUrl: '',
        image: '',
        artist: {
            _id: '',
            name: '',
            lastFmId: '',
        },
        genre: {
            _id: '',
            name: '',
            lastFmTag: ''
        },
        liked: false
    },
    error: '',
    pagination: {
        page: 1,
        total: 0,
        pageSize: 0,
        numberOfPages: 0
    }
}

export const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: songsReducer,
    extraReducers: {
        [getSongs.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.songs = payload.documents
            state.pagination = {
                page: payload.page,
                total: payload.total,
                pageSize: payload.pageSize,
                numberOfPages: payload.numberOfPages
            }
        },
        [getSongs.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
            state.songs = []
            state.pagination = {
                page: 1,
                total: 0,
                pageSize: 0,
                numberOfPages: 0
            }
        },
        [getSongs.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getSongsByArtistId.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.songs = payload.documents
            state.pagination = {
                page: payload.page,
                total: payload.total,
                pageSize: payload.pageSize,
                numberOfPages: payload.numberOfPages
            }
        },
        [getSongsByArtistId.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
            state.songs = []
            state.pagination = {
                page: 1,
                total: 0,
                pageSize: 0,
                numberOfPages: 0
            }
        },
        [getSongsByArtistId.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getSongsByGenreId.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.error = ''
            state.songs = payload.documents
            state.pagination = {
                page: payload.page,
                total: payload.total,
                pageSize: payload.pageSize,
                numberOfPages: payload.numberOfPages
            }
        },
        [getSongsByGenreId.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
            state.songs = []
            state.pagination = {
                page: 1,
                total: 0,
                pageSize: 0,
                numberOfPages: 0
            }
        },
        [getSongsByGenreId.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [likeSong.fulfilled.type]: (state) => {
            state.loading = false
        },
        [likeSong.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [likeSong.pending.type]: (state) => {
            state.loading = true

        },
        [dislikeSong.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            if (payload.isFromFavourites) {
                const dislikedSongIndex = state.likedSongs.findIndex(song => song._id === payload.songId)
                state.likedSongs.splice(dislikedSongIndex, 1)
            }
        },
        [dislikeSong.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [dislikeSong.pending.type]: (state) => {
            state.loading = true
        },
        [getFavouriteSongs.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.likedSongs = payload.documents
            state.pagination = {
                page: payload.page,
                total: payload.total,
                pageSize: payload.pageSize,
                numberOfPages: payload.numberOfPages
            }
        },
        [getFavouriteSongs.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getFavouriteSongs.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [getSongById.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.song = payload
        },
        [getSongById.pending.type]: (state) => {
            state.loading = true
            state.error = ''
        },
        [getSongById.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload.message
        },
        [addListenedSong.fulfilled.type]: (state) => {
            state.loading = false
        },
        [addListenedSong.rejected.type]: (state) => {
            state.loading = false
        },
        [addListenedSong.pending.type]: (state) => {
            state.loading = false
        },
        [getRecommendedSongs.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            const elements: Song[] = []
            payload.map((el: string) => {
                const newEl: Song = JSON.parse(el)
                elements.push(newEl)
            })
            state.recommendations = elements
        },
        [getRecommendedSongs.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getRecommendedSongs.pending.type]: (state) => {
            state.loading = false
        },
    }
})

export const { resetSongsToInitialState } = songsSlice.actions
export const songsSelector = (state: IRootStore) => state.songs
