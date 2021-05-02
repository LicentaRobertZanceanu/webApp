import styled from 'styled-components'
import { colors } from '../../constants/colors'
import { fontSizes } from '../../constants/style'

export const Wrapper = styled.div`
    width:100%;
    height:auto;
    padding:6px 10px;
    text-align:center;
    margin-top:10px;
    border-radius:4px;
    ${({ type }: { type: 'error' | 'success' }) => `
        background:${type === 'error' ? colors.red : colors.green}
    `}
`

export const Text = styled.p`
    font-size:${fontSizes.normal};
    color:${colors.white};
`