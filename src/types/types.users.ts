export interface LoggedInUser {
    email: string
    firstName: string
    lastName: string
    id: string
}

export interface UsersState {
    loggedInUser: LoggedInUser
    loading: boolean
    error: string
}

export interface Artist {
    _id: string
    name: string
    lastFmId: string
}

export interface Genre {
    _id: string
    name: string
    lastFmTag: string
}

export interface Song {
    _id: string
    name: string
    lastFmId: string
    lastFmUrl: string
    youtubeUrl: string
    image: string
    artist: Artist
    genre: Genre
}

export interface SongsState {
    songs: Song[]
    song: Song | {}
    loading: boolean
    error: string
}

export interface ArtistsState {
    artists: Artist[]
    loading: boolean
    error: string
}

export interface GenresState {
    genres: Genre[]
    loading: boolean
    error: string
}

export interface PlaylistsState {
    playlists: []
    loading: boolean
    error: string
}