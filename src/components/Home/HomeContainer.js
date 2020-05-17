import React from 'react'
import Home_Profile from './Home_Profile'
import Home_Timeline from './Home_Timeline'
import Home_Workspace from './Home_Workspace'
import Home_Work from './Home_Work'
import styled from 'styled-components'
import { workspaceApi } from '../api'

const HomeContainer = styled.div`
    margin-top: var(--margin-for-navbar);
`

export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <HomeContainer>
                <Home_Profile/>
                <Home_Timeline/>
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
                    />)
                )}
                </Home_Workspace>
            </HomeContainer>
        )
    }
}