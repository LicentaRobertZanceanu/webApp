import React, { CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, SizeProp, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { colors } from '../../constants/colors'

interface IconProps {
    name: IconName
    color?: string
    size?: SizeProp
    iconPrefix: IconPrefix
    style?: CSSProperties
    onClick?: () => void
    id?: string
    className?: string
}

export const Icon = ({ className, id, name, color, size, iconPrefix, style, onClick }: IconProps) => {
    return (
        <FontAwesomeIcon
            icon={[iconPrefix, name]}
            id={id}
            color={color || colors.gray}
            size={size || '1x'}
            style={style}
            onClick={onClick}
        />
    )
}