import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { Row, Col, Link } from 'framework7-react'

const FooterContainer = styled(Container)`
    margin: 20px;
    width: 100%;
    display: block;
    justify-items: center;
`

const FooterLink = styled(Link)`
    font-weight: bold;
    color: #ABCDEF;
`

export default (props) => {
    return (
        <FooterContainer>
            <hr/>
            <Row>
                <Col className="align-center d-block" width="100">
                    <FooterLink href="http://1000ship.me" external>1000ship.me</FooterLink>
                </Col>
                <Col className="align-center d-block" width="100">© Copyrights all right reserved.</Col>
            </Row>
        </FooterContainer>
    )
}