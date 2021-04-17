import React from "react"
import { ButtonProps } from "./button.props"
import { ButtonText, ButtonWrapper } from "./button.styles"

export const Button = ({
    type,
    onClick,
    text
}
    :ButtonProps) => {
    return(
        <ButtonWrapper
            type={type}
            onClick={onClick}
        >
            <ButtonText>
                {text}
            </ButtonText>
        </ButtonWrapper>
    )
}