import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes } from '../../constants/style'

export const SongWrapper = styled.div`
    width:100%;
    height:60px;
    display:flex;
    align-items:center;
    margin-bottom:10px;
    cursor:pointer;
`

export const SongImageWrapper = styled.div`
    width:80px;
    height:100%;
    margin-right:10px;
`

export const SongImage = styled.img`
    width:100%;
    height:100%;
`

export const SongDetailsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

export const SongName = styled.h1`
    font-size:${fontSizes.big};
    color:${colors.primary};
    margin-bottom:5px;
`
export const SongArtistName = styled.h2`
    font-size:${fontSizes.small};
    color:${colors.gray};
`