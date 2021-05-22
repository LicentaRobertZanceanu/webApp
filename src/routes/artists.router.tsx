import React from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from "../components"
import { ArtistsListing } from '../pages'
import { artistsRoutes } from './clientRoutes'

const ArtistsRouter = () => {
    return (
        <Switch>
            <PrivateRoute
                component={ArtistsListing}
                path={artistsRoutes.artists}
                exact={true}
            />
        </Switch>
    )
}

export default ArtistsRouter