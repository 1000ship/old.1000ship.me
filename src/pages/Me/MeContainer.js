import React from 'react'
import styled from 'styled-components'
import { workspaceApi } from '../../api'
import { Page, Navbar, Link } from 'framework7-react'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Page name="gallery">
                <Container>
                    <h1>Now developing this page... 😂</h1>
                </Container>
                <Footer/>
            </Page>
        )
    }
}