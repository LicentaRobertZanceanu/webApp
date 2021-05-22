import React, { FC, CSSProperties } from 'react'
import { Icon } from '..'
import { colors } from '../../constants/colors'
import { CardProps } from './song-card'
import { CardSubtitle, CardTitle, ContainerWrapper, ListingCardImage, ListingCardImageContainer, SongsListingContainer, SongsListingTextWrapper } from './styles'
import Song from '../../assets/images/song.webp'

const IconStyle: CSSProperties = {
    cursor: 'pointer'
}

const IconStyleWithMarginLeft: CSSProperties = {
    ...IconStyle,
    marginLeft: '10px'
}

const ListingCard: FC<CardProps> = ({ id, title, link, image, subTitle, isSongsListing }) => {
    const renderListingForSongs = () => {
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
                        color={colors.gray}
                        style={IconStyle}
                    />
                    <Icon
                        iconPrefix={'fas'}
                        name={'plus'}
                        size={'sm'}
                        color={colors.gray}
                        style={IconStyleWithMarginLeft}
                    />
                    <Icon
                        iconPrefix={'fas'}
                        name={'play'}
                        size={'sm'}
                        color={colors.gray}
                        style={IconStyleWithMarginLeft}
                    />
                </div>

            </SongsListingContainer>
        )
    }

    return (
        <ContainerWrapper listing>
            <ListingCardImageContainer>
                <ListingCardImage src={image || Song} />
            </ListingCardImageContainer>
            {
                !isSongsListing ?
                    <>
                        <CardTitle listing>{title}</CardTitle>
                        <div style={{ marginLeft: 'auto' }}>
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