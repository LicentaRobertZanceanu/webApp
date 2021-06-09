import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CardProps, RenderSongs } from '../../components'
import { dislikeSong, getSongs, likeSong, resetSongsToInitialState, SongsQueryParams, songsSelector } from '../../store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { debounce } from 'lodash'

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
            image: song.image,
            subTitle: song.artist.name,
            isSongsListing: true,
            likeSong: {
                liked: song.liked,
                onClick: () => {
                    if (song.liked) {
                        dispatch(dislikeSong({
                            songId: song._id
                        }))
                        return false
                    } else {
                        dispatch(likeSong({
                            songId: song._id
                        }))
                        return true
                    }
                }
            }
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

    const onSearchSongs = (value: string) => {
        setSongsAsCardElements([])
        const debouncer = debounce(() => {
            dispatch(resetSongsToInitialState({}))
            dispatch(getSongs({
                queryParams: {
                    page: 1,
                    limit: 20,
                    searchBy: value
                }
            }))

        }, 1000)
        debouncer()
    }

    return (
        <RenderSongs
            elements={songsAsCardElements}
            fetchData={fetchSongs}
            hasMore={pagination.page < pagination.numberOfPages}
            history={history}
            showSearchComponent={true}
            onSearchSongs={onSearchSongs}
        />
    )
}

export default withRouter(SongsListing)

