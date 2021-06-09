import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes } from '../../constants/style'
import { ContentPadding } from '../../styles/styles.app'

const PAGE_HEIGHT = '95%'

export const MainContainerWrapper = styled.div`
    width:70%;
    height:${PAGE_HEIGHT};
    background:white;
    box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
    border-radius: 14px;
    padding:${ContentPadding};
    display:flex;
    flex-direction:column;
`

export const YoutubeWrapper = styled.iframe`
    width:100%;
    height:80%;
`

export const VideoName = styled.h1`
    font-size:${fontSizes.biggest};
    color:${colors.primary};
    margin-top:auto;
    ${({ songsRecommendations }: { songsRecommendations?: boolean }) => songsRecommendations && `
        margin-top:0;
        margin-bottom:20px;
    `}
`

export const ArtistImageWrapper = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:10px;
`
export const ArtistImage = styled.img`
    width:100%;
    height:100%;
    border-radius:50px;
`

export const ArtistName = styled.h2`
    font-size:${fontSizes.big};
    color:${colors.primary};
`

export const SongsContainerWrapper = styled.div`
    flex:1;
    height:${PAGE_HEIGHT};
    display:flex;
    flex-direction:column;
    background:${colors.white};
    border-radius:14px;
    box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
    padding:${ContentPadding};
    margin-left:20px;
`

export const SongsRecommendations = styled.div`
    flex:1;
    height:80%;
    overflow-x:auto;
`