import styled from "styled-components"
import { colors } from "../../../constants/colors"
import { fontSizes } from "../../../constants/style"

export const FieldWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
    ${({ height100 }: { height100?: boolean }) => height100 && `
        height:80%!important;
        overflow:hidden;
    `}
`

export const FieldLabel = styled.p`
    font-size:${fontSizes.small};
    color:${colors.gray};
    margin-bottom:5px;
    ${({ hasError }: { hasError: boolean }) => hasError && `
        color:${colors.pink};
    `}
`

export const StyledInput = styled.input`
    width:100%;
    height:30px;
    border:0;
    border-bottom:1px solid ${colors.lightGray};
    padding:5px 10px;
    outline:none;
    ${({
    isTouched,
    hasError
}: {
    isTouched: boolean,
    hasError: boolean
}) => {

        if (hasError) {
            return `border-bottom:1px solid ${colors.pink};`
        }

        if (isTouched) {
            return `border-bottom:1px solid ${colors.primary};`
        }
    }
    }
`

export const FieldError = styled.p`
    margin-top:5px;
    font-size:${fontSizes.small};
    color:${colors.pink};
`

export const RadioFieldWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
    cursor:pointer;
    height:70%;
    overflow:auto;
`

export const RadioFieldCircle = styled.div`
    width:20px;
    height:20px;
    border:1px solid ${colors.gray};
    border-radius:50%;
    margin-right:5px;
    padding:2px;
`

export const RadioFieldCircleSelected = styled.div`
    width:100%;
    height:100%;
    border-radius:50%;
    background:${colors.primary};
`

export const RadiosFieldText = styled.h1`
    color:${colors.gray};
    font-size:${fontSizes.normal};
    ${({ selected }: { selected: boolean }) => selected && `
        color:${colors.primary};
        font-weight:bold;
    ` }
`