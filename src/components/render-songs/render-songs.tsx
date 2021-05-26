import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CardProps, Icon, InfiniteScrollCard } from '..'
import { artistsSelector, getArtistById, getSongs, getSongsByArtistId, resetSongsToInitialState, songsSelector } from '../../store'
import { PageContentWrapper, PageSubtitle, PageTitle, PageTopWrapper, PageWrapper } from '../../styles/styles.app'
import { History } from 'history'

interface Props {
    elements: CardProps[]
    filteredSongs?: boolean
    filterName?: string
    fetchData: () => void
    hasMore: boolean
    history: History
    pageTitle?: string
}

const RenderSongs: FC<Props> = ({
    elements,
    filteredSongs,
    filterName,
    fetchData,
    hasMore,
    history,
    pageTitle
}) => {
    return (
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle
                        breadCrumb
                        onClick={() => history.push('/songs')}
                    >
                        {pageTitle ? pageTitle : 'Songs'}
                    </PageTitle>
                    {
                        filteredSongs &&
                        <>
                            <Icon
                                name={'chevron-right'}
                                iconPrefix={'fas'}
                                style={{
                                    marginLeft: '10px'
                                }}
                            />
                            <PageSubtitle>
                                {filterName}
                            </PageSubtitle>
                        </>
                    }
                </PageTopWrapper>
                <InfiniteScrollCard
                    elements={elements}
                    hasMore={hasMore}
                    fetchData={fetchData}
                />
            </PageContentWrapper>
        </PageWrapper>
    )
}

export default RenderSongs
