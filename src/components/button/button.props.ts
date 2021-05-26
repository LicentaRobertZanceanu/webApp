import { CSSProperties } from "styled-components";

export type ButtonProps = {
    type: "submit" | "button" | "reset" | undefined
    onClick?: () => void
    text: string
    fullWidth?: boolean
    marginTopAuto?: boolean
    style?: CSSProperties
}