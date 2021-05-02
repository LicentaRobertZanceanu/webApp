import React from "react"
import { LogoImage, LogoWrapper } from "./logo.styles"
import LogoImg from "../../assets/images/logo.png"

interface LogoProps {
    small?: boolean
}

export const Logo = ({ small }: LogoProps) => {
    return (
        <LogoWrapper small={small}>
            <LogoImage src={LogoImg} />
        </LogoWrapper>
    )
}