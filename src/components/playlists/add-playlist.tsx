import React, { FC } from 'react'
import { AddPlaylistForm, AddPlaylistFormValues } from '../forms'
import { Popup } from '../modals'
import { useDispatch } from 'react-redux'
import { createPlaylist, getPlaylists } from '../../store'

interface Props {
    showModal: boolean
    onClose: () => void
}

const AddPlaylist: FC<Props> = ({ onClose, showModal }) => {
    const dispatch = useDispatch()
    const onSubmit = (values: AddPlaylistFormValues) => {
        dispatch(createPlaylist({
            values,
            callback: () => {
                onClose()
                dispatch(getPlaylists())
            }
        }))
    }
    return (
        <Popup
            showModal={showModal}
            onClose={onClose}
            title={'Create playlist'}
        >
            <AddPlaylistForm
                onSubmit={onSubmit}
            />
        </Popup>
    )
}

export default AddPlaylist