import React, { FC, useEffect } from 'react'
import { AttributeSongToPlaylistForm } from '../forms'
import { Popup } from '../modals'
import { useDispatch, useSelector } from 'react-redux'
import { addSongToPlaylist, getPlaylists, playlistsSelector, playlistsSlice } from '../../store'

interface Props {
    showModal: boolean
    onClose: () => void
    songId: string
}

const AttributeSongToPlaylist: FC<Props> = ({
    onClose,
    showModal,
    songId,
}) => {
    const dispatch = useDispatch()
    const { playlists } = useSelector(playlistsSelector)

    useEffect(() => {
        if (showModal) {
            dispatch(getPlaylists())
        }
    }, [showModal])
    return (
        <Popup
            showModal={showModal}
            onClose={onClose}
            title={'Attribute to playlist'}
        >
            <AttributeSongToPlaylistForm
                onSubmit={(values) => dispatch(addSongToPlaylist({
                    songId,
                    playlistId: values.playlistId,
                    callback: () => {
                        onClose()
                    }
                }))}
                playlists={playlists}
            />
        </Popup>
    )
}

export default AttributeSongToPlaylist