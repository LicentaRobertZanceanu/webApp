import styled from "styled-components"
import { colors } from "../constants/colors"
import { borderRadius } from "../constants/style"

export const AuthWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    padding:3% 6%;
    align-items:center;
`

export const AuthContentHalfWrapper = styled.div`
    flex:1;
    height:100%;
    display:flex;
    flex-direction:column;
    margin-right:50px;
    ${({ second }: { second?: boolean }) => second && `
        margin-left:auto;
        background:${colors.white};
        border-radius:${borderRadius.big};
        box-shadow: 0px -1px 20px -4px rgba(130,136,149,0.4);
        padding:5% 3%;
        flex:0;
        width:40%;
        flex-basis:auto;
        margin-right:0;
    `}
`

export const AuthIllustration = styled.img`
    width: auto;
    height: 60vh;
    margin-top:8%;
`