import React, { useEffect, useState } from 'react'
import {
    PageContentWrapper,
    PageTitle,
    PageTopWrapper,
    PageWrapper
} from '../../styles/styles.app'
import { useSelector, useDispatch } from "react-redux"
import { artistsSelector, getArtists, resetArtistsToInitialState } from '../../store'
import { CardProps, InfiniteScrollCard } from '../../components'
import { getArtistIllustration } from '../../assets/images'

const ArtistsListing = () => {
    const dispatch = useDispatch()
    const { artists, pagination } = useSelector(artistsSelector)
    const [artistsAsCardElements, setArtistsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        dispatch(getArtists({
            queryParams: {
                page: pagination.page,
                limit: 20
            }
        }))
    }, [])
    useEffect(() => {
        return () => {
            dispatch(resetArtistsToInitialState({}))
        }
    }, [])
    useEffect(() => {
        const newArtists: CardProps[] = artists.map((artist, index) => ({
            id: artist._id,
            title: artist.name,
            link: '/',
            image: getArtistIllustration(`artist-${(index + 1) % 5}`),
        }))
        setArtistsAsCardElements([...artistsAsCardElements, ...newArtists])
    }, [artists])
    const fetchSongs = () => {
        dispatch(getArtists({
            queryParams: {
                page: pagination.page + 1,
                limit: pagination.pageSize
            }
        }))
    }

    return (
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle>Artists</PageTitle>
                </PageTopWrapper>
                <InfiniteScrollCard
                    elements={artistsAsCardElements}
                    hasMore={pagination.page < pagination.numberOfPages}
                    fetchData={fetchSongs}
                />
            </PageContentWrapper>
        </PageWrapper>
    )
}

export default ArtistsListing