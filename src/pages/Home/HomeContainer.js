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
        this.$f7.toast.create({
            text: "현재 개발 중 입니다. 버그가 있어도 봐주세요 ㅎㅎ..",
            closeButton: true,
            closeButtonText: '알겠습니당 ^^',
            closeButtonColor: 'blue',
          }).open();
        return (
            <Page name="home">
                <Home_Profile/>
                <Spacer/>
                <Home_Timeline/>
                <Footer/>
            </Page>
        )
    }
}