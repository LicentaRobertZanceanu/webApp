import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes } from '../../constants/style'

export const Wrapper = styled.div`
    height:100%;
    width:14vw;
    background:${colors.white};
    box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding:20px 0px;
    max-width:230px;
`

export const Category = styled.h4`
    font-size:${fontSizes.small};
    margin-top:14px;
    margin-bottom:10px;
    color:${colors.gray};
    text-transform:uppercase;
    letter-spacing:1.4px;
    padding:0 30px;
    ${({ last }: { last?: boolean }) => last && `margin-top:auto;`}
`

export const LinkWrapper = styled.div`
    width:100%;
    height:fit-content;
    display:flex;
    align-items:center;
    :hover {
        background:rgba(${colors.primaryRGBA}, 0.1);
        * {
            color:${colors.primary};
            font-weight:bold;
        }
    }
    padding:5px 30px;
    cursor:pointer;
    ${({ last, isActive }: { last?: boolean, isActive: boolean }) => `
        ${last ? `margin-top:auto;` : ''}
        ${isActive && `
            background:rgba(${colors.primaryRGBA}, 0.1);
            * {
                color:${colors.primary}!important;
                font-weight:bold;
            }
        `}
    `}
`

export const Link = styled.p`
    font-size:${fontSizes.big};
    color:${colors.darkGray};
    margin-left:5px;
`