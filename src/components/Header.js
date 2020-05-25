import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { Link } from 'framework7-react'

const HeaderContainer = styled.div`
    background-color: var(--navbar-bg-color);
    backdrop-filter: blur(10px);
    padding: 13px;
    box-shadow: 0px 4px 4px var(--navbar-shadow-color);
    position: fixed;
    width: 100vw;
    z-index: 2;
    color: var(--text-color-1);
`
const TitleText = styled(Link)`
    font-weight: 900;
    font-size: 20px;
    color: var(--text-color-1);
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Container>
                <TitleText href="/about">
                    1000ship
                </TitleText>
            </Container>
        </HeaderContainer>
    )
}

export default Header