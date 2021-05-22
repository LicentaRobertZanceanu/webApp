import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { HomePage, ProfilePage } from "../pages"
import { appRoutes } from "./clientRoutes"
import { Nav, PrivateRoute } from "../components"
import { useDispatch } from 'react-redux'
import { getLoggedInUserData } from '../store'
import { ContentWrapper, PagesWrapper } from '../styles/styles.app'
import SongsRouter from './songs.router'
import ArtistsRouter from './artists.router'
import GenresRouter from './genres.router'

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
                        component={HomePage}
                        path={appRoutes.home}
                        exact={true}
                    />
                    <PrivateRoute
                        component={ProfilePage}
                        path={appRoutes.profile}
                        exact={true}
                    />
                    <PrivateRoute
                        component={SongsRouter}
                        path={appRoutes.songs}
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
                </Switch>
            </ContentWrapper>

        </PagesWrapper>
    )
}