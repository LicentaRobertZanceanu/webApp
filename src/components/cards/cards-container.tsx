import React, { FC } from 'react'
import ListingCard from './listing-card'
import SongCard, { CardProps } from './song-card'
import { ContainerWrapper } from './styles'

interface Props {
    elements: CardProps[]
    type: 'songs' | 'listing'
    fixedHeight?: boolean
}

const CardsContainer: FC<Props> = ({ elements, type, fixedHeight }) => {
    if (type === 'songs') {
        return (
            <ContainerWrapper>
                {
                    elements.map((element) => {
                        return (
                            <SongCard
                                key={`card-element-${element.id}`}
                                {...element}
                            />
                        )
                    })
                }
            </ContainerWrapper>
        )
    } else {
        return (
            <ContainerWrapper fixedHeight={!!fixedHeight}>
                {
                    elements.map((element) => {
                        return (
                            <ListingCard
                                key={`card-element-${element.id}`}
                                {...element}
                            />
                        )
                    })
                }
            </ContainerWrapper>
        )
    }

}

export default CardsContainer