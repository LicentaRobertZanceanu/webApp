export interface AuthData {
    authToken: string
    refreshToken: string
    expires: number
}

export interface AuthState {
    loading: boolean
    error: string
    authData: AuthData
}