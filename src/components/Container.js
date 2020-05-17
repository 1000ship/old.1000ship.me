import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding-right: 0px;
padding-left: 0px;
margin-right: auto;
margin-left: auto;

@media (min-width: 768px) {
    width: 750px;
}

@media (min-width: 992px) {
    width: 970px;
}

@media (min-width: 1200px) {
    width: 1170px;
}
`

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Container>{this.props.children}</Container>
        )
    }
}
