import React from "react";
import Container from "../../components/Container";
import { Col, Row } from "framework7-react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 3,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const MD_SIZE = 768;
    const LG_SIZE = 992;
    let columns = 0;
    if (window.innerWidth < MD_SIZE) columns = 2;
    else if (window.innerWidth < LG_SIZE) columns = 3;
    else columns = 4;
    if (this.state.columns != columns) {
      this.setState({ columns });
    }
  }

  render() {
    const { columns } = this.state;
    return (
      <Container>
        <Row className="workspace">
          <Col width="50" className="work-sizer"></Col>
          <Col width="100">
            <span className="partial-title">🎁 What I made</span>
          </Col>
          <Col
            width={`${
              columns == 1 ? 100 : columns == 2 ? 50 : columns == 3 ? 33 : 25
            }`}
          >
            {React.Children.map(this.props.children, (work, index) =>
              index % columns == 0 ? (
                <React.Fragment key={index}>{work}</React.Fragment>
              ) : (
                <></>
              )
            )}
          </Col>
          <Col
            width={`${
              columns == 1 ? 100 : columns == 2 ? 50 : columns == 3 ? 33 : 25
            }`}
          >
            {React.Children.map(this.props.children, (work, index) =>
              index % columns == 1 ? (
                <React.Fragment key={index}>{work}</React.Fragment>
              ) : (
                <></>
              )
            )}
          </Col>
          <Col
            width={`${
              columns == 1 ? 100 : columns == 2 ? 50 : columns == 3 ? 33 : 25
            }`}
          >
            {React.Children.map(this.props.children, (work, index) =>
              index % columns == 2 ? (
                <React.Fragment key={index}>{work}</React.Fragment>
              ) : (
                <></>
              )
            )}
          </Col>
          <Col
            width={`${
              columns == 1 ? 100 : columns == 2 ? 50 : columns == 3 ? 33 : 25
            }`}
          >
            {React.Children.map(this.props.children, (work, index) =>
              index % columns == 3 ? (
                <React.Fragment key={index}>{work}</React.Fragment>
              ) : (
                <></>
              )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
