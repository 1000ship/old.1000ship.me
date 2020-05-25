import React from 'react'
import Home_Profile from './Home_Profile'
import Home_Timeline from './Home_Timeline'
import Home_Workspace from './Home_Workspace'
import Home_Work from './Home_Work'
import styled from 'styled-components'
import { workspaceApi } from '../../api'
import { Page, Navbar, Link } from 'framework7-react'
import Footer from '../../components/Footer'
import Container from '../../components/Container'


const NavTitleText = styled.div`
    font-weight: 900;
    font-size: 20px;
`

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
                <Home_Workspace>
                {
                    workspaceApi.getWorks().map( (work, i) =>
                    (<Home_Work
                        key={i}
                        linkHref = {work.linkHref}
                        imageName = {work.imageName}
                        supportVideo = {work.supportVideo}
                        videoName = {work.videoName}
                        title = {work.title}
                        description = {work.description}
                        createdYear = {work.createdYear}
                        tags = {work.tags}
                        techIcons = {work.techIcons}
                    />)
                )}
                </Home_Workspace>
                <Footer/>
            </Page>
        )
    }
}