export type ButtonProps = {
    type: "submit" | "button" | "reset" | undefined
    onClick?: () => void
    text: string
}