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
}

export const Icon = ({ name, color, size, iconPrefix, style }: IconProps) => {
    return (
        <FontAwesomeIcon
            icon={[iconPrefix, name]}
            color={color || colors.gray}
            size={size || '1x'}
            style={style}
        />
    )
}