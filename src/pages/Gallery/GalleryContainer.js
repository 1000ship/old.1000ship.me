import React from 'react'
import styled from 'styled-components'
import { workspaceApi } from '../../api'
import { Page, Navbar, Link } from 'framework7-react'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import GalleryWork from './GalleryWork'
import GalleryWorkspace from './GalleryWorkspace'

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
        }
    }

    render () {
        return (
            <Page name="gallery">
                <GalleryWorkspace>
                {
                    workspaceApi.getWorks().map( (work, i) =>
                    (<GalleryWork
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
                </GalleryWorkspace>
                <Footer/>
            </Page>
        )
    }
}