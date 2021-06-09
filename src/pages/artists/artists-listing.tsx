import React, { useEffect, useState } from 'react'
import {
    PageContentWrapper,
    PageTitle,
    PageTopWrapper,
    PageWrapper
} from '../../styles/styles.app'
import { useSelector, useDispatch } from "react-redux"
import { artistsSelector, getArtists, resetArtistsToInitialState } from '../../store'
import { CardProps, InfiniteScrollCard, SearchComponent } from '../../components'
import { getArtistIllustration } from '../../assets/images'
import { debounce } from 'lodash'

const ArtistsListing = () => {
    const dispatch = useDispatch()
    const { artists, pagination } = useSelector(artistsSelector)
    const [artistsAsCardElements, setArtistsAsCardElements] = useState<CardProps[]>([])
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false)

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
            link: `/songs/artists/${artist._id}`,
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

    const onSearchSongs = (value: string) => {
        setArtistsAsCardElements([])
        const debouncer = debounce(() => {
            dispatch(resetArtistsToInitialState({}))
            dispatch(getArtists({
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
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle>Artists</PageTitle>
                    <SearchComponent
                        onSearch={onSearchSongs}
                        inputIsShown={showSearchInput}
                        handleInputShownState={() => setShowSearchInput(!showSearchInput)}
                    />
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