import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CardProps, InfiniteScrollCard, RenderSongs } from '../../components'
import { artistsSelector, getArtistById, getSongs, resetSongsToInitialState, SongsQueryParams, songsSelector } from '../../store'
import { PageContentWrapper, PageSubtitle, PageTitle, PageTopWrapper, PageWrapper } from '../../styles/styles.app'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps {

}

const SongsListing: FC<Props> = ({ history, match }) => {
    const dispatch = useDispatch()
    const { songs, pagination } = useSelector(songsSelector)
    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        const queryParams: SongsQueryParams = {
            page: pagination.page,
            limit: 20
        }

        dispatch(getSongs({ queryParams }))
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
        const queryParams: SongsQueryParams = {
            page: pagination.page + 1,
            limit: 20
        }

        dispatch(getSongs({ queryParams }))
    }
    return (
        <RenderSongs
            elements={songsAsCardElements}
            fetchData={fetchSongs}
            hasMore={pagination.page < pagination.numberOfPages}
            history={history}
        />
    )
}

export default withRouter(SongsListing)

