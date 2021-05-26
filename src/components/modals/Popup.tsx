import React, { FC } from 'react'
import { Icon } from '..'
import { FlexWrapper } from '../../styles/styles.app'
import { PopupModalContainer, PopupModalTitle, PopupModalWrapper } from './styles'

interface Props {
    showModal: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

const Popup: FC<Props> = ({ children, onClose, showModal, title }) => {
    if (!showModal) {
        return <></>
    }
    return (
        <PopupModalWrapper>
            <PopupModalContainer>
                <FlexWrapper marginBottom={'10px'}>
                    <PopupModalTitle>{title}</PopupModalTitle>
                    <Icon
                        iconPrefix={'fas'}
                        name={'times'}
                        style={{
                            marginLeft: 'auto',
                            cursor: 'pointer',
                        }}
                        onClick={onClose}
                    />
                </FlexWrapper>
                {children}
            </PopupModalContainer>
        </PopupModalWrapper>
    )
}

export default Popup