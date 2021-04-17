import styled from "styled-components"
import { colors } from "../../constants/colors"
import { fontSizes } from "../../constants/style"

export const ButtonWrapper = styled.button`
    width:100%;
    height:auto;
    padding:12px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    border:0;
    border-radius:10px;
    background:${colors.primary};
    margin:0;
    cursor:pointer;
`

export const ButtonText = styled.p`
    font-size:${fontSizes.normal};
    color:${colors.white};
    font-weight:bold;
`