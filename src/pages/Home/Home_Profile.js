import React from "react";
import Container from "../../components/Container";
import { Row, Col } from "framework7-react";

export default (props) => {
  return (
    <Container>
      <Row className="profile align-items-center">
        <Col width="100" medium="50" className="image">
          <img src="static/img/profile.jpg" className="lazy lazy-fade-in" />
        </Col>
        <Col width="100" medium="50">
          <div className="name">
            천성혁 <span>@1000ship</span>
          </div>
          <div className="describe">
            "세상은 넓고 사람은 많지만,
            <br />내 방에서 컴퓨터하는게 제일 좋아 🙂"
          </div>
          <ul>
            <li>한국디지털미디어고등학교 졸업</li>
            <li>
              홍익대학교 컴퓨터공학 전공 <span className="badge">진행중</span>
            </li>
            <li>2016 멋쟁이사자처럼 4기</li>
            <li>2019 소프트웨어마에스트로 10기 연수</li>
            <li>
              2020 홍익대 컴퓨터공학과 학생회{" "}
              <span className="badge">진행중</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
