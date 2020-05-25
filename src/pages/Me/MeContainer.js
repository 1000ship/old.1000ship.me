import React from 'react'
import styled from 'styled-components'
import { workspaceApi } from '../../api'
import { Page, Navbar, Link } from 'framework7-react'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

const InstagramLink = "https://www.instagram.com/1000ship/"
const FacebookLink = "https://www.facebook.com/1000ship"
const YoutubeLink = "https://www.youtube.com/channel/UCABGTT1zjQgvkejvugkmdig"
const BlogLink = "https://blog.naver.com/cjstjdgur123"

export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Page name="me">
                <Container>
                    <h1>Now developing this page... 😂</h1>
                    <h3>Link to</h3>
                    <ul>
                        <li>
                            <Link href={InstagramLink} external target="_blank">Instagram</Link>
                        </li>
                        <li>
                            <Link href={FacebookLink} external target="_blank">Facebook</Link>
                        </li>
                        <li>
                            <Link href={YoutubeLink} external target="_blank">Youtube</Link>
                        </li>
                        <li>
                            <Link href={BlogLink} external target="_blank">Blog</Link>
                        </li>
                    </ul>
                </Container>
                <Footer/>
            </Page>
        )
    }
}