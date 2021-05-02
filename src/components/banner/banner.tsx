import React from 'react'
import { Wrapper, Text } from './banner.styles'

interface BannerProps {
    type: 'error' | 'success'
    message?: string
    show: boolean
}

export const Banner = ({ type, message, show }: BannerProps) => {
    if (!show) {
        return <></>
    }
    return (
        <Wrapper type={type}>
            <Text>{message}</Text>
        </Wrapper>
    )
}