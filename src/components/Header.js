import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { Link } from "framework7-react";

const HeaderContainer = styled.div`
  background-color: var(--navbar-bg-color);
  backdrop-filter: blur(10px); // 얘는 왜 또 불통, app padding-top 이 문제인듯
  padding: 13px;
  box-shadow: 0px 4px 4px var(--navbar-shadow-color);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10000; // 아 찝찝해
  color: var(--text-color-1);
`;
const TitleText = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  color: var(--text-color-1);
  margin-right: 5px;
`;

const MenuItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: var(--text-color-2);
  margin-left: 15px;
  transition: color 0.3s !important;
  &:hover {
    color: var(--primary-color-lighter);
    font-weight: 900;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      pageName: "me",
    };
  }

  setPageName(pageName) {
    this.setState({
      pageName,
    });
  }

  render() {
    const { pageName } = this.state;
    return (
      <HeaderContainer>
        <Container>
          <TitleText href="/">1000ship</TitleText>
          <MenuItem href="/gallery">.gallery</MenuItem>
          <MenuItem href="/me">.me</MenuItem>
        </Container>
      </HeaderContainer>
    );
  }
}
