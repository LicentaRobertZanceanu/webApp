import React, { FC } from 'react'
import { StyledInput } from '../forms/custom-fields/custom-fields.styles'
import { Icon } from '../icon/Icon'
import { SearchComponentWrapper } from './search.styles'

interface Props {
    onSearch: (value: string) => void
    inputIsShown: boolean
    handleInputShownState: () => void
}

const SearchComponent: FC<Props> = ({
    inputIsShown,
    onSearch,
    handleInputShownState
}) => {
    return (
        <SearchComponentWrapper>
            {
                inputIsShown &&
                <StyledInput
                    isTouched={true}
                    hasError={false}
                    placeholder={'Search for songs'}
                    onChange={(event) => onSearch(event.target.value)}
                />
            }

            <Icon
                name={'search'}
                iconPrefix={'fas'}
                style={{
                    cursor: 'pointer',
                    marginLeft: inputIsShown ? '10px' : 'auto'
                }}
                onClick={() => handleInputShownState()}
            />
        </SearchComponentWrapper>
    )
}

export default SearchComponent