import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CardProps, RenderSongs } from '../../components'
import { useSelector, useDispatch } from "react-redux"
import { genresSelector, getGenreById, getSongsByGenreId, resetSongsToInitialState, songsSelector } from '../../store'

type MatchParams = {
    genreId: string
}

interface Props extends RouteComponentProps<MatchParams> { }

const SongsByGenres: FC<Props> = ({ match, history }) => {
    const dispatch = useDispatch()
    const { songs, pagination } = useSelector(songsSelector)
    const { genre } = useSelector(genresSelector)

    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        dispatch(getGenreById({
            genreId: match.params.genreId
        }))
        dispatch(getSongsByGenreId({
            queryParams: {
                page: pagination.page,
                limit: 20,
                genreId: match.params.genreId
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
        dispatch(getSongsByGenreId({
            queryParams: {
                page: pagination.page + 1,
                limit: pagination.pageSize,
                genreId: match.params.genreId
            }
        }))
    }

    return (
        <RenderSongs
            elements={songsAsCardElements}
            filteredSongs
            filterName={genre.name}
            fetchData={fetchSongs}
            hasMore={pagination.page < pagination.numberOfPages}
            history={history}
        />
    )
}

export default withRouter(SongsByGenres)