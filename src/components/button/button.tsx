import React from "react"
import { ButtonProps } from "./button.props"
import { ButtonText, ButtonWrapper } from "./button.styles"

export const Button = ({
    type,
    onClick,
    text,
    fullWidth,
    marginTopAuto,
    style
}
    : ButtonProps) => {
    return (
        <ButtonWrapper
            type={type}
            onClick={onClick}
            fullWidth={fullWidth}
            marginTopAuto={marginTopAuto}
            style={style}
        >
            <ButtonText>
                {text}
            </ButtonText>
        </ButtonWrapper>
    )
}