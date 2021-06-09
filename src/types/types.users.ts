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

export interface PaginationElements {
    page: number
    total: number
    pageSize: number
    numberOfPages: number
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
    liked: boolean
}

export interface SongsState {
    songs: Song[]
    recommendations: Song[]
    song: Song
    likedSongs: Song[]
    loading: boolean
    error: string
    pagination: PaginationElements
}

export interface ArtistsState {
    artists: Artist[]
    artist: Artist
    loading: boolean
    error: string
    pagination: PaginationElements
}

export interface GenresState {
    genres: Genre[]
    genre: Genre
    loading: boolean
    error: string
}

export interface Playlist {
    name: string
    _id: string
}

export interface PlaylistsState {
    playlists: Playlist[]
    playlist: Playlist
    loading: boolean
    error: string
    songs: Song[]
}