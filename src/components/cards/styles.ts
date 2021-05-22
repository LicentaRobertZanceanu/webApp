import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes, metrics } from '../../constants/style'
import { ContentPadding } from '../../styles/styles.app'

export const ContainerWrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    padding:${ContentPadding};
    ${({ listing, fixedHeight }: { listing?: boolean, fixedHeight?: boolean }) => `
    ${listing ? `
        border-bottom:1px solid ${colors.lightGray};
        padding:10px 5px;
        :hover {
            background-color:rgba(${colors.primaryRGBA},0.1);
        }
    `: ''}
    ${fixedHeight ?
            ` 
        max-height:80%;
        overflow-x:auto;
      `: ''
        }
    
    `}
`

export const CardContainer = styled.div`
    width: 180px;
    height: 250px;
    border:1px solid ${colors.lightGray};
    border-radius:10px;
    margin-right:20px;
    margin-bottom:10px;
    padding:10px;
    display:flex;
    flex-direction:column;
`
export const CardImageWrapper = styled.div`
    width:100%;
    height:100%;
    max-height:160px;
    text-align:center;
    margin-bottom:10px;
    position:relative;
`

export const CardImage = styled.img`
    width:auto;
    height:100%;
    object-fit:cover;
    border-radius:10px;
`

export const CardImageOverlay = styled.div`
    top:0;
    width:100%;
    height:100%;
    position:absolute;
    background:rgba(0,0,0,0.2);
    border-radius:10px;
    display:flex;
    flex-direction:column;
`

export const PlayButtonWrapper = styled.div`
    background:${colors.white};
    border-radius:50%;
    width:28px;
    height:28px;
    margin-top:auto;
    margin-left:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:5px;
    margin-bottom:5px;
`

export const CardTitle = styled.h1`
    margin-top:auto;
    font-size:${fontSizes.normal};
    font-weight:bold;
    color:${colors.primary};
    margin-bottom:5px;
    ${({ listing }: { listing?: boolean }) => listing && `
        margin-bottom:0;
        margin-top:0;
    `}
`

export const CardSubtitle = styled.h2`
    font-size:${fontSizes.small};
    color:${colors.darkGray};
`

export const ListingCardImageContainer = styled.div`
    width:40px;
    height:40px;
    margin-right:10px;
`

export const ListingCardImage = styled.img`
    width:100%;
    height:100%;
    border-radius:10px;
`
export const SongsListingContainer = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`

export const SongsListingTextWrapper = styled.div`
    width:auto;
    height:100%;
    display:flex;
    flex-direction:column;
`

export const InfiniteScrollWrapper = styled.div`
    padding:${ContentPadding};
    max-height:80%;
    overflow-x:auto;
    .infinite-scroll-component__outerdiv {
        width:100%!important;
    }
`