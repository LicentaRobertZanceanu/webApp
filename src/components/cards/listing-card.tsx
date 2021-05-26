import React, { FC, CSSProperties, useState } from 'react'
import { Icon } from '..'
import { colors } from '../../constants/colors'
import { CardProps } from './song-card'
import { CardSubtitle, CardTitle, ContainerWrapper, ListingCardImage, ListingCardImageContainer, SongsListingContainer, SongsListingTextWrapper } from './styles'
import Song from '../../assets/images/song.webp'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AttributeSongToPlaylist } from '../playlists'

const IconStyle: CSSProperties = {
    cursor: 'pointer'
}

const IconStyleWithMarginLeft: CSSProperties = {
    ...IconStyle,
    marginLeft: '10px'
}

const ListingCard: FC<CardProps> = ({
    deleteId,
    id,
    image,
    isPlaylistListing,
    isSongsListing,
    likeSong,
    link,
    subTitle,
    title,
    onDelete,
    removeSongFromPlaylist
}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState<boolean>(false)

    const renderListingForSongs = () => {
        let likeIconColor = colors.gray
        if (likeSong) {
            if (likeSong.liked) {
                likeIconColor = colors.primary
            }
        }
        const renderSecondIcon = () => {
            if (isPlaylistListing) {
                return (
                    <Icon
                        iconPrefix={'fas'}
                        name={'trash-alt'}
                        size={'sm'}
                        color={colors.gray}
                        style={IconStyleWithMarginLeft}
                        onClick={() => {
                            if (removeSongFromPlaylist) {
                                removeSongFromPlaylist()
                            }
                        }}
                    />
                )
            } else {
                return (
                    <Icon
                        iconPrefix={'fas'}
                        name={'plus'}
                        size={'sm'}
                        color={colors.gray}
                        style={IconStyleWithMarginLeft}
                        onClick={() => {
                            setShowModal(true)
                        }}
                    />
                )
            }
        }
        return (
            <SongsListingContainer>
                <SongsListingTextWrapper>
                    <CardTitle listing>{title}</CardTitle>
                    <CardSubtitle>{subTitle}</CardSubtitle>
                </SongsListingTextWrapper>
                <div style={{ marginLeft: 'auto' }}>
                    <Icon
                        iconPrefix={'fas'}
                        name={'thumbs-up'}
                        size={'sm'}
                        color={likeIconColor}
                        style={IconStyle}
                        onClick={() => {
                            if (likeSong) {
                                const likeStatus = likeSong.onClick()
                                likeSong.liked = likeStatus
                            }
                        }}
                    />
                    {renderSecondIcon()}
                    <Icon
                        iconPrefix={'fas'}
                        name={'play'}
                        size={'sm'}
                        color={colors.gray}
                        style={IconStyleWithMarginLeft}
                    />
                </div>
                <AttributeSongToPlaylist
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    songId={id}
                />
            </SongsListingContainer>
        )
    }
    return (
        <ContainerWrapper
            listing
            onClick={(event: any) => {
                if (deleteId) {
                    if (event.target.dataset.icon === 'trash-alt' ||
                        event.target.id === deleteId ||
                        event.target.parentElement.dataset.icon === 'trash-alt') {
                        if (onDelete) {
                            onDelete()
                        }
                        return
                    }
                }
                if (!isSongsListing) {
                    if (link) {
                        history.push(link)
                    }
                }
            }}
        >
            <ListingCardImageContainer>
                <ListingCardImage src={image || Song} />
            </ListingCardImageContainer>
            {
                !isSongsListing ?
                    <>
                        <CardTitle listing>{title}</CardTitle>
                        <div style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            zIndex: 20
                        }}>
                            {
                                !!deleteId &&
                                <div
                                    id={deleteId}
                                    style={{
                                        padding: '5px'
                                    }}
                                >
                                    <Icon
                                        iconPrefix={'fas'}
                                        name={'trash-alt'}
                                        size={'xs'}
                                        color={colors.primary}
                                        style={{ ...IconStyle, marginRight: '10px' }}
                                        className={deleteId}
                                    />
                                </div>
                            }
                            <Icon
                                iconPrefix={'fas'}
                                name={'chevron-right'}
                                size={'xs'}
                                color={colors.primary}
                                style={IconStyle}
                            />
                        </div>
                    </>
                    :
                    renderListingForSongs()
            }

        </ContainerWrapper>
    )
}

export default ListingCard