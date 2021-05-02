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