import React, { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CardProps } from '.';
import ListingCard from './listing-card';
import { ContainerWrapper, InfiniteScrollWrapper } from './styles';

interface Props {
    elements: CardProps[]
    hasMore: boolean
    fetchData: () => any
}

const InfiniteScrollCard: FC<Props> = ({ elements, hasMore, fetchData }) => {
    return (
        <InfiniteScrollWrapper id="scrollableDiv">
            <InfiniteScroll
                dataLength={elements.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                style={{
                    width: '100%',
                }}
            >
                {
                    elements.map((element) => {
                        return (
                            <ListingCard
                                key={`card-infinite-scroll-element-${element.id}`}
                                {...element}
                            />
                        )
                    })
                }
            </InfiniteScroll>
        </InfiniteScrollWrapper>

    )
}

export default InfiniteScrollCard
