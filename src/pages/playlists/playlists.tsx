import React, { useEffect, useState } from 'react'
import {
    PageContentWrapper,
    PageTitle,
    PageTopWrapper,
    PageWrapper
} from '../../styles/styles.app'
import { useSelector, useDispatch } from "react-redux"
import { deletePlaylist, getPlaylists, playlistsSelector } from '../../store'
import { CardProps, CardsContainer } from '../../components'
import Playlist from '../../assets/images/playlist.webp'

const Playlists = () => {
    const { playlists } = useSelector(playlistsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylists())
    }, [])

    const playlistsAsCardElements: CardProps[] = playlists.map((playlist) => ({
        id: playlist._id,
        title: playlist.name,
        image: Playlist,
        link: `/playlists/${playlist._id}`,
        deleteId: `delete-${playlist._id}`,
        onDelete: () => {
            dispatch(deletePlaylist({
                playlistId: playlist._id,
                dispatch
            }))
        }
    }))

    return (
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle>Playlists</PageTitle>
                </PageTopWrapper>
                <CardsContainer
                    elements={playlistsAsCardElements}
                    type={'listing'}
                    fixedHeight
                />
            </PageContentWrapper>
        </PageWrapper>
    )
}

export default Playlists
