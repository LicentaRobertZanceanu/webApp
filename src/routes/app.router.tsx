import { Suspense, useEffect } from "react"
import { Route, Switch } from 'react-router-dom'
import { AuthPage } from "../pages"
import { appRoutes, authRoutes } from "./clientRoutes"
import { useSelector } from 'react-redux'
import { authSelector } from "../store"
import { PrivateRouter } from './private.router'
import { PrivateRoute } from "../components"
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface AppRouterFCProps extends RouteComponentProps { }

const AppRouterFC = ({ history }: AppRouterFCProps) => {
    const { authData } = useSelector(authSelector)
    useEffect(() => {
        if (!!authData.authToken) {
            const isApphRoute = !!Object.values(appRoutes).find(route => route === history.location.pathname)
            if (!isApphRoute) {
                history.push('/')
            }
        }
    }, [history.location.pathname, authData.authToken])

    return (
        <Suspense fallback={<h1 >Loading</h1>}>
            <Switch>
                <Route
                    component={AuthPage}
                    path={authRoutes.auth}
                    exact={true}
                />
                <PrivateRoute
                    component={PrivateRouter}
                    path={appRoutes.home}
                    exact={false}
                />

            </Switch>
        </Suspense>
    )
}

export const AppRouter = withRouter(AppRouterFC)