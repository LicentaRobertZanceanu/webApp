import styled from "styled-components"
import { colors } from "../../../constants/colors"
import { fontSizes } from "../../../constants/style"

export const FieldWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
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