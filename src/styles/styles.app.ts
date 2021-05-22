import styled from "styled-components"
import { colors } from "../constants/colors"
import { fontSizes, metrics } from "../constants/style"

export const AppWrapper = styled.div`
    width:100%;
    max-height:100vh;
    overflow-x:auto;
    background:${colors.background};
`

export const PagesWrapper = styled.div`
    flex:1;
    max-height:100vh;
    oveflow-x:auto;
    display:flex;
`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-height:100vh;
    overflow-x:auto;
    flex-grow:100;
`

export const FormWrapper = styled.form`
    width: 100%;
    height:auto;
    display:flex;
    flex-direction:column;
    ${({ fullHeight }: { fullHeight?: boolean }) => fullHeight && `height:100%;`}
`

export const PageWrapper = styled.div`
    flex:1;
    width:100%;
    max-height:100vh;
    overflow-x:auto;
    padding:50px ${metrics.horizontalPadding} 30px ${metrics.horizontalPadding};
`

export const PageContentWrapper = styled.div`
    width:100%;
    height:100%;
    max-height:100vh;
    overflow-x:auto;
    background:white;
    box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
    border-radius: 14px;
    ${({ card, smallContainer, marginLeftAuto }: { card?: boolean, smallContainer?: boolean, marginLeftAuto?: boolean }) => `
        ${card ? `
            height:auto;
            margin-bottom:20px;
        `: ''}
        ${smallContainer ? `
            width:47%;
        `: ''}
        ${marginLeftAuto ? `
            margin-left:auto
        `: ''}
    `}
`

export const ContentPadding = `20px 25px`

export const PageTopWrapper = styled.div`
    width:100%;
    height:auto;
    padding:${ContentPadding};
    border-bottom:3px solid ${colors.background};
    display:flex;
    align-items:center;
`

export const PageTitle = styled.h1`
    font-size:${fontSizes.biggest};
    color:${colors.primary};
    font-weight:bold;
    letter-spacing:1.2px;
    ${({ card }: { card?: boolean }) => card && `font-size:${fontSizes.normal}`}
`

export const PageSeeMore = styled.h2`
    font-size:${fontSizes.small};
    color:${colors.darkGray};
    margin-left:auto;
`

export const BigWrapper = styled.div`
    padding:20px 25px;
    flex:1;
    height:calc(100% - 92px);
`

export const FlexWrapper = styled.div`
    display:flex;
    align-items:center;
    width:100%;
`
