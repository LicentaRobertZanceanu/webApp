import React, { useEffect, FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dislikeSong, getRecommendedSongs, likeSong, songsSelector } from '../../store'
import { CardProps, RenderSongs } from '../../components'

interface Props extends RouteComponentProps { }

const RecommendationsFC: FC<Props> = ({ history }) => {
    const dispatch = useDispatch()
    const { recommendations } = useSelector(songsSelector)
    useEffect(() => {
        dispatch(getRecommendedSongs())
    }, [])
    let songsAsCardElements: CardProps[] = []
    songsAsCardElements = recommendations.map((song) => ({
        id: song._id,
        title: song.name,
        link: '/',
        image: song.image,
        subTitle: song.artist.name,
        isSongsListing: true,
        hideLikeSong: true
    }))
    return (
        <RenderSongs
            elements={songsAsCardElements}
            filteredSongs
            filterName={'Recommendations'}
            fetchData={() => false}
            hasMore={false}
            history={history}
        />
    )
}

export default withRouter(RecommendationsFC)