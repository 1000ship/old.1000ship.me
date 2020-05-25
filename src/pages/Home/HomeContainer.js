import React from 'react'
import Home_Profile from './Home_Profile'
import Home_Timeline from './Home_Timeline'
import styled from 'styled-components'
import { workspaceApi } from '../../api'
import { Page, Navbar, Link } from 'framework7-react'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

const Spacer = styled.div`
    height: 30px;
`

export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Page name="home">
                <Home_Profile/>
                <Spacer/>
                <Home_Timeline/>
                <Spacer/>
                <Footer/>
            </Page>
        )
    }
}