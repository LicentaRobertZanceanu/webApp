import React from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '../../store'
import { Route, Redirect } from 'react-router-dom'
import { authRoutes } from '../../routes'

interface PrivareRouteProps {
    component: React.ComponentType
    path: string
    exact: boolean
}

export const PrivateRoute = ({ component, path, exact }: PrivareRouteProps) => {
    const { authData } = useSelector(authSelector)
    if (!authData.authToken) {
        return <Redirect to={authRoutes.auth} />
    }
    return (
        <Route
            component={component}
            path={path}
            exact={exact}
        />
    )
}