import { combineReducers } from '@reduxjs/toolkit'
import { artistsSlice } from './artists'
import { authSlice } from './auth/auth.slice'
import { genresSlice } from './genres'
import { playlistsSlice } from './playlists'
import { songsSlice } from './songs'
import { usersSlice } from './user'

export const rootReducer = combineReducers({
   auth: authSlice.reducer,
   artists: artistsSlice.reducer,
   genres: genresSlice.reducer,
   playlists: playlistsSlice.reducer,
   songs: songsSlice.reducer,
   users: usersSlice.reducer,
})