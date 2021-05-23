import React, { lazy } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { songsRoutes } from '.'
import { PrivateRoute } from "../components"

const SongsListing = lazy(() => import('../pages/songs/songs-listing'))
const SongsByArtist = lazy(() => import('../pages/songs/songs-by-artists-listing'))
const SongsByGenres = lazy(() => import('../pages/songs/songs-by-genres'))

const SongsRouter = () => {
    return (
        <Switch>
            <PrivateRoute
                component={SongsByArtist}
                path={songsRoutes.songsByArtists}
                exact={false}
            />
            <PrivateRoute
                component={SongsByGenres}
                path={songsRoutes.songsByGenres}
                exact={false}
            />
            <PrivateRoute
                component={SongsListing}
                path={songsRoutes.songs}
                exact={true}
            />
        </Switch>
    )
}

export default withRouter(SongsRouter)