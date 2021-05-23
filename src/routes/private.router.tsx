import React, { useEffect, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { appRoutes, songsRoutes } from "./clientRoutes"
import { Nav, PrivateRoute } from "../components"
import { useDispatch } from 'react-redux'
import { getLoggedInUserData } from '../store'
import { ContentWrapper, PagesWrapper } from '../styles/styles.app'

const SongsRouter = lazy(() => import('./songs.router'))
const ArtistsRouter = lazy(() => import('./artists.router'))
const GenresRouter = lazy(() => import('./genres.router'))
const HomePage = lazy(() => import('../pages/home/home'))
const ProfilePage = lazy(() => import('../pages/profile'))

export const PrivateRouter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLoggedInUserData())
    }, [])
    return (
        <PagesWrapper>
            <Nav />
            <ContentWrapper>
                <Switch>
                    <PrivateRoute
                        component={SongsRouter}
                        path={songsRoutes.songs}
                        exact={false}
                    />
                    <PrivateRoute
                        component={ProfilePage}
                        path={appRoutes.profile}
                        exact={false}
                    />
                    <PrivateRoute
                        component={ArtistsRouter}
                        path={appRoutes.artists}
                        exact={false}
                    />
                    <PrivateRoute
                        component={GenresRouter}
                        path={appRoutes.genres}
                        exact={false}
                    />
                    <PrivateRoute
                        component={HomePage}
                        path={appRoutes.home}
                        exact={false}
                    />
                </Switch>
            </ContentWrapper>

        </PagesWrapper>
    )
}