import styled from "styled-components"
import { colors } from "../constants/colors"
import { fontSizes, metrics } from "../constants/style"

export const AppWrapper = styled.div`
    width:100%;
    height:100vh;
    background:${colors.background};
`

export const PagesWrapper = styled.div`
    flex:1;
    height:100%;
    display:flex;
`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
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
    width:100%;
    height:100%;
    padding:50px ${metrics.horizontalPadding} 30px ${metrics.horizontalPadding};
`

export const PageContentWrapper = styled.div`
    width:100%;
    height:100%;
    background:white;
    box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
    border-radius: 14px;
`

export const PageTitle = styled.h1`
    padding:20px 25px;
    font-size:${fontSizes.biggest};
    color:${colors.primary};
    font-weight:bold;
    letter-spacing:1.2px;
    border-bottom:3px solid ${colors.background};
`

export const BigWrapper = styled.div`
    padding:20px 25px;
    flex:1;
    height:calc(100% - 92px);
`