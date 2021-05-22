import { AuthState } from ".";
import { ArtistsState, GenresState, PlaylistsState, SongsState, UsersState } from "./types.users";

export interface IRootStore {
    artists: ArtistsState
    auth: AuthState
    genres: GenresState
    playlists: PlaylistsState
    songs: SongsState
    users: UsersState
}