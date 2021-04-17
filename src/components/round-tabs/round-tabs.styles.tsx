import styled from "styled-components"
import { colors } from "../../constants/colors"
import { fontSizes } from "../../constants/style"

export const Wrapper = styled.div`
    width:fit-content;
    height:40px;
    display:flex;
    background:${colors.background};
    align-items:center;
    border-radius:30px;
    ${({ auth }: { auth: boolean | undefined }) => auth && `
        margin-bottom:20%;
    `}
`

export const Tab = styled.div`
    width:120px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:28px;
    cursor:pointer;
    ${({ selected }: { selected: boolean }) => selected && `
        background:${colors.primary}
    `}
`

export const TabName = styled.h1`
    font-size:${fontSizes.small};
    color:${colors.black};
    font-weight:normal;
    ${({ selected }: { selected: boolean }) => selected && `
        color:${colors.white}
    `}
`