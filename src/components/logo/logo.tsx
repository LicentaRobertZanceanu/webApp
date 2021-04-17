import React from "react"
import { LogoImage, LogoWrapper } from "./logo.styles"
import LogoImg from "../../assets/images/logo.png"

export const Logo = () => {
    return (
        <LogoWrapper>
            <LogoImage src={LogoImg} />
        </LogoWrapper>
    )
}