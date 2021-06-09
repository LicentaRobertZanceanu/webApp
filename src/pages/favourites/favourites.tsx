import React, { useEffect, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardProps, RenderSongs } from '../../components'
import { dislikeSong, getFavouriteSongs, likeSong, songsSelector } from '../../store'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps {

}

const FavouritesSongs: FC<Props> = ({ history }) => {
    const dispatch = useDispatch()
    const { likedSongs, pagination } = useSelector(songsSelector)
    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        dispatch(getFavouriteSongs({
            queryParams: {
                page: 1,
                limit: 20
            }
        }))
    }, [])

    useEffect(() => {
        const newSongs: CardProps[] = likedSongs.map((song) => ({
            id: song._id,
            title: song.name,
            image: song.image,
            subTitle: song.artist.name,
            isSongsListing: true,
            likeSong: {
                liked: true,
                onClick: () => {
                    dispatch(dislikeSong({
                        songId: song._id,
                        isFromFavourites: true
                    }))
                    return false
                }
            }
        } as CardProps))
        setSongsAsCardElements([...songsAsCardElements, ...newSongs])
    }, [likedSongs])

    const fetchData = () => {
        dispatch(getFavouriteSongs({
            queryParams: {
                page: pagination.page + 1,
                limit: 20
            }
        }))
    }

    return (
        <RenderSongs
            elements={songsAsCardElements}
            fetchData={fetchData}
            hasMore={pagination.page < pagination.numberOfPages}
            history={history}
            pageTitle={'Favourites'}
        />
    )
}

export default withRouter(FavouritesSongs)