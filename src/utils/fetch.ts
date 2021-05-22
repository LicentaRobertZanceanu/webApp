import { REFRESH_TOKEN_ENDPOINT } from "../constants/global-constants"
import { AuthData } from "../types"
import { loadAuthDataFromStorage } from "./auth"

interface apiFetchProps {
    api: 'auth' | 'users' | 'music'
    endpoint: string
    method: 'get' | 'put' | 'post' | 'delete'
    body?: any
}

const getApiUrl = (api: string): string => {
    let url: string = ''
    switch (api) {
        case 'auth': {
            url = 'https://smartmusicapi-auth.herokuapp.com/auth'
            break
        }
        case 'users': {
            url = 'https://smartmusicapi-users.herokuapp.com/users'
            break
        }
        case 'music': {
            url = 'https://smartmusicapi-music.herokuapp.com'
            break
        }
        default: {
            url = ''
        }
    }

    return url
}

export const apiFetch = async ({
    api,
    endpoint,
    method,
    body
}: apiFetchProps) => {
    let headers: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    let authData: AuthData = {
        refreshToken: '',
        expires: 0,
        authToken: ''
    }

    if (api !== 'auth') {
        authData = loadAuthDataFromStorage()
        headers = {
            ...headers,
            'Authorization': `Bearer ${authData.authToken}`
        }
    } else {
        if (endpoint === REFRESH_TOKEN_ENDPOINT) {
            headers = {
                ...headers,
                'Authorization': `Bearer ${body.authToken}`,
                'RefreshToken': `Bearer ${body.refreshToken}`
            }
        }
    }

    let init: RequestInit = {
        method,
        headers
    }

    if (body && method !== 'get') {
        init = {
            ...init,
            body: JSON.stringify(body)
        }
    }

    const apiUrl = getApiUrl(api)
    console.log(
        '4243242424', `${apiUrl}${endpoint}`
    )
    return new Promise(async (resolve, reject) => {
        await fetch(`${apiUrl}${endpoint}`, init)
            .then(async (response) => {
                if (response.status >= 400) {
                    const error = await response.json()
                    reject(error)
                }
                return response.json()
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })
}