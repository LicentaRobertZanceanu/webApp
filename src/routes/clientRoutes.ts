export const songsRoutes = {
    songs: '/songs',
    songsByArtists: '/songs/artists/:artistId',
    songsByGenres: '/songs/genres/:genreId',
    viewSong: '/songs/:songId'
}

export const artistsRoutes = {
    artists: '/artists'
}

export const genresRoutes = {
    genres: '/genres'
}

export const appRoutes = {
    home: '/',
    profile: '/profile',
    recommendations: '/recommendations',
    favourites: '/favourites',
    playlists: '/playlists',
    songsFromPlaylist: '/playlists/:playlistId',
    ...songsRoutes,
    ...artistsRoutes,
    ...genresRoutes
}

export const nestedRoutes = {
    songsByArtists: appRoutes.songsByArtists,
    songsByGenres: appRoutes.songsByGenres
}

export const authRoutes = {
    auth: '/auth'
}
