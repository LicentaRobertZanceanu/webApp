import styled from "styled-components"

export const LogoWrapper = styled.div`
    width:auto;
    height:130px;
    ${({ small }: { small?: boolean }) => small && `
        height:70px;
    `}
`

export const LogoImage = styled.img`
    width: auto;
    height: 100%;
`