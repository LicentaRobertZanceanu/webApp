import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes } from '../../constants/style'

export const PopupModalWrapper = styled.div`
    background:rgba(0,0,0,.2);
    display:flex;
    alignItems:center;
    justify-content:center;
    width:100vw;
    height:100%;
    position:absolute;
    z-index:2000;
    top:0;
    left:0;
`

export const PopupModalContainer = styled.div`
    margin-top:auto;
    margin-bottom:auto;
    width:40%;
    height:auto;
    max-height:45%;
    background:${colors.white};
    border-radius:10px;
    display:flex;
    flex-direction:column;
    padding:20px;
    overflow:hidden;
`

export const PopupModalTitle = styled.h1`
    color:${colors.primary};
    font-size:${fontSizes.big};
    font-weight:bold;
`