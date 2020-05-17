import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const HeaderContainer = styled.div`
    background-color: var(--navbar-bg-color);
    color: var(--navbar-text-color);
    padding: 13px;
    box-shadow: 0px 4px 4px var(--navbar-shadow-color);
`
const TitleText = styled.span`
    font-weight: 900;
    font-size: 20px;
`

export default (props) => {
    return (
        <HeaderContainer>
            <Container>
                <TitleText>1000ship</TitleText>
            </Container>
        </HeaderContainer>
    )
}