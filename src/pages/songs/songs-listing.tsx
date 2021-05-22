import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CardProps, InfiniteScrollCard } from '../../components'
import { getSongs, resetSongsToInitialState, songsSelector } from '../../store'
import { PageContentWrapper, PageTitle, PageTopWrapper, PageWrapper } from '../../styles/styles.app'

interface Props {

}

const SongsListing: FC<Props> = () => {
    const dispatch = useDispatch()
    const { songs, pagination } = useSelector(songsSelector)
    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])
    useEffect(() => {
        dispatch(getSongs({
            queryParams: {
                page: pagination.page,
                limit: 20
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
        dispatch(getSongs({
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
                    <PageTitle>Songs</PageTitle>
                </PageTopWrapper>
                <InfiniteScrollCard
                    elements={songsAsCardElements}
                    hasMore={pagination.page < pagination.numberOfPages}
                    fetchData={fetchSongs}
                />
            </PageContentWrapper>
        </PageWrapper>
    )
}

export default SongsListing

