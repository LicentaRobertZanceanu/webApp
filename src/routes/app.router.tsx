import React, { Suspense } from "react"
import { Route, Switch } from 'react-router-dom'
import { AuthPage, HomePage } from "../pages"
import { AUTH_ROUTE, HOME_ROUTE } from "./clientRoutes"

export const AppRouter = () => {
    return (
        <Suspense fallback={<div />}>
            <Switch>
                <Route
                    component={AuthPage}
                    path={AUTH_ROUTE}
                />
                <Route
                    component={HomePage}
                    path={HOME_ROUTE}
                />
            </Switch>
        </Suspense>
    )
}