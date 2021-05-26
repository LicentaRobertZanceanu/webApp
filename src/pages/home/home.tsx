import React, { useEffect, FC } from "react"
import { getSongs, getArtists, getGenres, songsSelector, artistsSelector, genresSelector, resetArtistsToInitialState, resetSongsToInitialState } from "../../store"
import { useSelector, useDispatch } from "react-redux"
import { FlexWrapper, PageContentWrapper, PageSeeMore, PageTitle, PageTopWrapper, PageWrapper } from "../../styles/styles.app"
import { CardsContainer, CardProps } from "../../components"
import { getArtistIllustration } from '../../assets/images'
import Genres from '../../assets/images/genres.webp'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps { }

const HomePage: FC<Props> = ({ history }) => {
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

    useEffect(() => {
        return () => {
            dispatch(resetArtistsToInitialState({}))
            dispatch(resetSongsToInitialState({}))
        }
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
        link: `/songs/artists/${artist._id}`
    }))

    const genresAsCardElements: CardProps[] = genres.map((genre) => ({
        id: genre._id,
        title: genre.name,
        image: Genres,
        link: `/songs/genres/${genre._id}`
    }))

    return (
        <PageWrapper>
            <PageContentWrapper card>
                <PageTopWrapper>
                    <PageTitle>Songs</PageTitle>
                    <PageSeeMore
                        onClick={() => history.push('/songs')}
                    >
                        See more
                    </PageSeeMore>
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
                        <PageSeeMore onClick={() => history.push('/artists')}>See more</PageSeeMore>
                    </PageTopWrapper>
                    <CardsContainer
                        elements={artistsAsCardElements}
                        type={'listing'}
                    />
                </PageContentWrapper>
                <PageContentWrapper card smallContainer marginLeftAuto>
                    <PageTopWrapper>
                        <PageTitle>Genres</PageTitle>
                        <PageSeeMore onClick={() => history.push('/genres')}>See more</PageSeeMore>
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

export default withRouter(HomePage)