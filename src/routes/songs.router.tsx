import React from 'react'
import { Switch } from 'react-router-dom'
import { songsRoutes } from '.'
import { PrivateRoute } from "../components"
import { SongsListing } from '../pages'

const SongsRouter = () => {
    return (
        <Switch>
            <PrivateRoute
                component={SongsListing}
                path={songsRoutes.songs}
                exact={true}
            />
        </Switch>
    )
}

export default SongsRouter