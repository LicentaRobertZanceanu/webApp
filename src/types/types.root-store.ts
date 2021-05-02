import { AuthState } from ".";
import { UsersState } from "./types.users";

export interface IRootStore {
    auth: AuthState
    users: UsersState
}