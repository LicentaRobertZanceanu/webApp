export const songsRoutes = {
    songs: '/songs'
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
    ...songsRoutes,
    ...artistsRoutes,
    ...genresRoutes
}

export const authRoutes = {
    auth: '/auth'
}
