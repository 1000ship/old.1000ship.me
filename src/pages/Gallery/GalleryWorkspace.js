import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import { Col, Row } from "framework7-react";

const WorkColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

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
          <WorkColumn>
            {React.Children.map(this.props.children, (work, index) => (
              <React.Fragment key={index}>{work}</React.Fragment>
            ))}
          </WorkColumn>
        </Row>
      </Container>
    );
  }
}
