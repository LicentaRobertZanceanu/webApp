import { AuthData } from "../types";

export const saveAuthDataInStorage = (authData: AuthData) => {
    localStorage.setItem('authData', JSON.stringify(authData))
}

export const loadAuthDataFromStorage = (): AuthData => {
    let authData: AuthData = {
        refreshToken: '',
        authToken: '',
        expires: 0
    }

    const storageItem = localStorage.getItem('authData')

    if (!storageItem) {
        return authData
    }

    authData = JSON.parse(storageItem)
    return authData
}

export const isUserAuthenticated = () => {
    const authData = loadAuthDataFromStorage()
    if (authData.authToken) {
        return true
    }

    return false
}
export const isTokenExpired = () => {

}