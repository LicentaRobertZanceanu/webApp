import { Middleware } from 'redux';
import { IRootStore } from '../types';
import moment from 'moment';
import { apiFetch } from '../utils';
import { REFRESH_TOKEN_ENDPOINT } from '../constants/global-constants';

export const isAuthenticated: Middleware<{}, IRootStore> = storeApi => next => action => {
    const { auth: { authData } } = storeApi.getState()

    const actionTypeElements = action.type.split('/')
    const isPendingRequest = actionTypeElements[1].endsWith('-Request') && actionTypeElements[2] === 'pending'
    if (!isPendingRequest) {
        next(action)
    } else {
        const dispatch = storeApi.dispatch
        const currentTimestamp = moment().unix()
        if (currentTimestamp > authData.expires) {
            const values = {
                refreshToken: authData.refreshToken,
                authToken: authData.authToken
            }

            apiFetch({
                api: 'auth',
                method: 'get',
                endpoint: REFRESH_TOKEN_ENDPOINT,
                body: values
            })
                .then(response => {
                    dispatch({
                        type: 'auth/refreshToken/fulfilled',
                        payload: response,
                        meta: {
                            requestStatus: 'fulfilled'
                        }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: 'auth/refreshToken/rejected',
                        payload: { error },
                        meta: {
                            requestStatus: 'rejected'
                        }
                    })
                })

        }
    }
}