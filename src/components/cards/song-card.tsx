import React, { FC } from 'react'
import { Icon } from '..'
import { colors } from '../../constants/colors'
import {
    CardContainer,
    CardImage,
    CardImageOverlay,
    CardImageWrapper,
    CardSubtitle,
    CardTitle,
    PlayButtonWrapper
} from './styles'

export interface LikeSongProps {
    liked: boolean
    onClick: () => boolean
}

export interface CardProps {
    id: string
    title: string
    likeSong?: LikeSongProps
    link: string
    image: string | undefined
    subTitle?: string
    isSongsListing?: true

}

const SongCard: FC<CardProps> = ({
    id,
    title,
    link,
    image,
    subTitle
}) => {
    return (
        <CardContainer>
            <CardImageWrapper>
                <CardImage src={image} />
                <CardImageOverlay>
                    <PlayButtonWrapper>
                        <Icon
                            iconPrefix={'fas'}
                            name={'play'}
                            size={'xs'}
                            color={colors.primary}
                        />
                    </PlayButtonWrapper>
                </CardImageOverlay>
            </CardImageWrapper>
            <CardTitle>{title}</CardTitle>
            {
                subTitle && <CardSubtitle>{subTitle}</CardSubtitle>
            }
        </CardContainer>
    )
}

export default SongCard