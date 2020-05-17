import React from 'react'
import Container from '../Container'
import { Col, Row } from 'framework7-react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: 3,
        }
        console.log( props )
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        const SM_SIZE = 576;
        const MD_SIZE = 768;
        let columns = 3;
        if ( window.innerWidth < SM_SIZE )
            columns = 1
        else if ( window.innerWidth < MD_SIZE )
            columns = 2
        if( this.state.columns !== columns )
            this.setState({columns});
    }

    render () {
        const {columns} = this.state
        return (
            <Container> 
                <Row className="workspace">
                    <Col width="50" className="work-sizer"></Col>
                    <Col width="100"><span className="partial-title">🎁 What I made</span></Col>
                    <Col width="100" medium="50" large="33">
                        {React.Children.map( this.props.children, (work, index) =>
                            ((index % columns == 0) ? <React.Fragment>{work}</React.Fragment> : <></>))}
                    </Col>
                    <Col width="100" medium="50" large="33">
                        {React.Children.map( this.props.children, (work, index) =>
                            ((index % columns == 1) ? <React.Fragment>{work}</React.Fragment> : <></>))}
                    </Col>
                    <Col width="100" medium="50" large="33">
                        {React.Children.map( this.props.children, (work, index) =>
                            ((index % columns == 2) ? <React.Fragment>{work}</React.Fragment> : <></>))}
                    </Col>
                </Row>
                            
            </Container>
    )}
}