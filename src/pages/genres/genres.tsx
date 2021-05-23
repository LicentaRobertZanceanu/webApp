import React, { useEffect } from 'react'
import { CardProps, CardsContainer } from '../../components'
import { PageContentWrapper, PageTitle, PageTopWrapper, PageWrapper } from '../../styles/styles.app'
import Genres from '../../assets/images/genres.webp'
import { useSelector, useDispatch } from "react-redux"
import { genresSelector, getGenres } from '../../store'

const GenresListing = () => {
    const { genres } = useSelector(genresSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const genresAsCardElements: CardProps[] = genres.map((genre) => ({
        id: genre._id,
        title: genre.name,
        image: Genres,
        link: `/songs/genres/${genre._id}`
    }))
    return (
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle>Genres</PageTitle>
                </PageTopWrapper>
                <CardsContainer
                    elements={genresAsCardElements}
                    type={'listing'}
                    fixedHeight
                />
            </PageContentWrapper>
        </PageWrapper>
    )
}

export default GenresListing