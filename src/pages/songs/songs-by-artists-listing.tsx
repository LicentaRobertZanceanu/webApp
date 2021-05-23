import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CardProps, RenderSongs } from '../../components'
import { artistsSelector, getArtistById, getSongs, getSongsByArtistId, resetSongsToInitialState, songsSelector } from '../../store'

type MatchParams = {
    artistId: string
}

interface Props extends RouteComponentProps<MatchParams> {

}

const SongsListing: FC<Props> = ({ match, history }) => {
    const dispatch = useDispatch()
    const { songs, pagination } = useSelector(songsSelector)
    const { artist } = useSelector(artistsSelector)

    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        dispatch(getArtistById({
            artistId: match.params.artistId
        }))
        dispatch(getSongsByArtistId({
            queryParams: {
                page: pagination.page,
                limit: 20,
                artistId: match.params.artistId
            }
        }))
    }, [])
    useEffect(() => {
        return () => {
            dispatch(resetSongsToInitialState({}))
        }
    }, [])
    useEffect(() => {
        const newSongs: CardProps[] = songs.map((song) => ({
            id: song._id,
            title: song.name,
            link: '/',
            image: song.image,
            subTitle: song.artist.name,
            isSongsListing: true
        }))
        setSongsAsCardElements([...songsAsCardElements, ...newSongs])
    }, [songs])

    const fetchSongs = () => {
        dispatch(getSongsByArtistId({
            queryParams: {
                page: pagination.page + 1,
                limit: pagination.pageSize,
                artistId: match.params.artistId
            }
        }))
    }

    return (
        <RenderSongs
            elements={songsAsCardElements}
            filteredSongs
            filterName={artist.name}
            fetchData={fetchSongs}
            hasMore={pagination.page < pagination.numberOfPages}
            history={history}
        />
    )
}

export default withRouter(SongsListing)

