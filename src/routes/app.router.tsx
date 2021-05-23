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

const AppRouterFC = ({ history, match }: AppRouterFCProps) => {
    const { authData } = useSelector(authSelector)
    console.log('gaghag', match, history)
    useEffect(() => {
        let redirectToHome = false
        if (!!authData.authToken) {
            if (history.location.pathname === authRoutes.auth) {
                redirectToHome = true
            }
        }

        if (redirectToHome) {
            history.push('/')
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