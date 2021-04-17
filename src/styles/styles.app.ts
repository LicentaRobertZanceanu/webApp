import styled from "styled-components"
import { colors } from "../constants/colors"

export const AppWrapper = styled.div`
    width:100%;
    height:100vh;
    background:${colors.background};
`

export const FormWrapper = styled.form`
    width: 100%;
    height:auto;
    display:flex;
    flex-direction:column;
`