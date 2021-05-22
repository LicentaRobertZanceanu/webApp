import React from 'react'
import { Switch } from 'react-router-dom'
import { genresRoutes } from '.'
import { PrivateRoute } from "../components"
import { GenresListing } from '../pages'

const GenresRouter = () => {
    return (
        <Switch>
            <PrivateRoute
                component={GenresListing}
                path={genresRoutes.genres}
                exact={true}
            />
        </Switch>
    )
}

export default GenresRouter