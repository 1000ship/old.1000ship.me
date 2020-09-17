import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { Row, Col, Link } from "framework7-react";

const FooterContainer = styled(Container)`
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  font-weight: bold;
  color: var(--primary-color-lighter);
  transition: color 0.2s ease !important;
  &:hover {
    color: var(--primary-color-darker);
  }
`;

export default (props) => {
  return (
    <FooterContainer>
      <hr />
      <Row>
        <Col className="align-center d-block" width="100">
          <FooterLink href="http://1000ship.me" external>
            1000ship.me
          </FooterLink>
        </Col>
        <Col className="align-center d-block" width="100">
          © Copyrights all right reserved.
        </Col>
      </Row>
    </FooterContainer>
  );
};
