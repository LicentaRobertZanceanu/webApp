import React, { useEffect } from "react"
import { getSongs, getArtists, getGenres, songsSelector, artistsSelector, genresSelector } from "../../store"
import { useSelector, useDispatch } from "react-redux"
import { FlexWrapper, PageContentWrapper, PageSeeMore, PageTitle, PageTopWrapper, PageWrapper } from "../../styles/styles.app"
import { CardsContainer, CardProps } from "../../components"
import { getArtistIllustration } from '../../assets/images'
import Genres from '../../assets/images/genres.webp'

export const HomePage = () => {
    const dispatch = useDispatch()
    const { songs } = useSelector(songsSelector)
    const { artists } = useSelector(artistsSelector)
    const { genres } = useSelector(genresSelector)

    useEffect(() => {
        dispatch(getSongs({
            queryParams: {
                page: 1,
                limit: 5
            }
        }))
        dispatch(getArtists({
            queryParams: {
                page: 1,
                limit: 5
            }
        }))
        dispatch(getGenres())
    }, [])

    const songsAsCardElements: CardProps[] = songs && songs.map((song) => ({
        id: song._id,
        title: song.name,
        link: '/',
        image: song.image,
        subTitle: song.artist.name
    }))
    const artistsAsCardElements: CardProps[] = artists.map((artist, index) => ({
        id: artist._id,
        title: artist.name,
        image: getArtistIllustration(`artist-${index + 1}`),
        // image: '',
        link: '/'
    }))

    const genresAsCardElements: CardProps[] = genres.map((genre) => ({
        id: genre._id,
        title: genre.name,
        image: Genres,
        link: '/'
    }))

    return (
        <PageWrapper>
            <PageContentWrapper card>
                <PageTopWrapper>
                    <PageTitle>Songs</PageTitle>
                    <PageSeeMore>See more</PageSeeMore>
                </PageTopWrapper>
                <CardsContainer
                    elements={songsAsCardElements}
                    type={'songs'}
                />

            </PageContentWrapper>
            <FlexWrapper>
                <PageContentWrapper card smallContainer>
                    <PageTopWrapper>
                        <PageTitle>Aritsts</PageTitle>
                        <PageSeeMore>See more</PageSeeMore>
                    </PageTopWrapper>
                    <CardsContainer
                        elements={artistsAsCardElements}
                        type={'listing'}
                    />
                </PageContentWrapper>
                <PageContentWrapper card smallContainer marginLeftAuto>
                    <PageTopWrapper>
                        <PageTitle>Genres</PageTitle>
                        <PageSeeMore>See more</PageSeeMore>
                    </PageTopWrapper>
                    <CardsContainer
                        elements={genresAsCardElements.slice(0, 5)}
                        type={'listing'}
                    />
                </PageContentWrapper>
            </FlexWrapper>

        </PageWrapper>
    )
}