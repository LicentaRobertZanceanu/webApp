import React, { FC, useState } from 'react'
import { CardProps, Icon, InfiniteScrollCard } from '..'
import { PageContentWrapper, PageSubtitle, PageTitle, PageTopWrapper, PageWrapper } from '../../styles/styles.app'
import { History } from 'history'
import SearchComponent from '../search/search'

interface Props {
    elements: CardProps[]
    filteredSongs?: boolean
    filterName?: string
    fetchData: () => void
    hasMore: boolean
    history: History
    pageTitle?: string
    showSearchComponent?: boolean
    onSearchSongs?: (value: string) => void
}

const RenderSongs: FC<Props> = ({
    elements,
    filteredSongs,
    filterName,
    fetchData,
    hasMore,
    history,
    pageTitle,
    showSearchComponent,
    onSearchSongs
}) => {
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false)

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
                    {
                        showSearchComponent &&
                        <SearchComponent
                            onSearch={(value) => {
                                if (onSearchSongs) {
                                    onSearchSongs(value)
                                }
                            }}
                            inputIsShown={showSearchInput}
                            handleInputShownState={() => setShowSearchInput(!showSearchInput)}
                        />
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
