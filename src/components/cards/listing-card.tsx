import React, { FC } from 'react'
import { Icon } from '..'
import { colors } from '../../constants/colors'
import { CardProps } from './song-card'
import { CardTitle, ContainerWrapper, ListingCardImage, ListingCardImageContainer } from './styles'

const ListingCard: FC<CardProps> = ({ id, title, link, image, subTitle }) => {
    return (
        <ContainerWrapper listing>
            <ListingCardImageContainer>
                <ListingCardImage src={image} />
            </ListingCardImageContainer>
            <CardTitle listing>{title}</CardTitle>
            <div style={{ marginLeft: 'auto' }}>
                <Icon
                    iconPrefix={'fas'}
                    name={'chevron-right'}
                    size={'xs'}
                    color={colors.primary}
                />
            </div>
        </ContainerWrapper>
    )
}

export default ListingCard