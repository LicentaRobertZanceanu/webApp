import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardProps, RenderSongs } from '../../components'
import { dislikeSong, getFavouriteSongs, songsSelector } from '../../store'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps {

}

const FavouritesSongs: FC<Props> = ({ history }) => {
    const dispatch = useDispatch()
    const { likedSongs } = useSelector(songsSelector)
    useEffect(() => {
        dispatch(getFavouriteSongs())
    }, [])

    const songsAsCardElements: CardProps[] = likedSongs.map((song) => ({
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

    return (
        <RenderSongs
            elements={songsAsCardElements}
            fetchData={() => console.log('fetch data')}
            hasMore={false}
            history={history}
            pageTitle={'Favourites'}
        />
    )
}

export default withRouter(FavouritesSongs)