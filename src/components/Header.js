import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { withRouter } from 'react-router-dom'
import { F7Link } from 'framework7-react'

const HeaderContainer = styled.div`
    background-color: var(--navbar-bg-color);
    backdrop-filter: blur(10px);
    color: var(--navbar-text-color);
    padding: 13px;
    box-shadow: 0px 4px 4px var(--navbar-shadow-color);
    position: fixed;
    width: 100vw;
    z-index: 2;

`
const TitleText = styled.span`
    font-weight: 900;
    font-size: 20px;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Container>
                <F7Link href="/somewhere">
                    <TitleText>
                        1000ship
                    </TitleText>
                </F7Link>
            </Container>
        </HeaderContainer>
    )
}

export default withRouter(Header)