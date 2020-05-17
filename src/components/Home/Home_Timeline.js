import React from 'react'
import Container from '../Container'
import { Row, Col } from 'framework7-react'


export default (props) => {
  return (
    <Container>
      <Row className="timeline">
        <Col width="100"><h3>🖥 What I used, using</h3></Col>
        <Col className="timeline-table-container">
            <table>
                <tr>
                    <th>~2011<div className="sub">~중</div></th>
                    <th>2012<div className="sub">고1</div></th>
                    <th>2013<div className="sub">고2</div></th>
                    <th>2014<div className="sub">고3</div></th>
                    <th>2015<div className="sub">재수</div></th>
                    <th>2016<div className="sub">대1</div></th>
                    <th>2017<div className="sub">의경</div></th>
                    <th>2018<div className="sub">의경</div></th>
                    <th>2019<div className="sub">대2</div></th>
                    <th>2020<div className="sub">대3</div></th>
                </tr>
                <tr className="actionscript">
                    <td><div className="language">ActionScript</div></td>
                    <td>
                        <span className="badge-text">교내 인트라넷 앱 개발</span>
                        <span className="badge-text">IT경진대회 최우수<br/>(Evermind for PC)</span>
                        <span className="badge-text">SK STAC 우수<br/>(Evermind)</span>
                    </td>
                    <td>
                        <span className="badge-text"></span>
                        <span className="badge-text">SK STAC 최우수<br/>(CookEat)</span>
                    </td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                </tr>
                <tr className="android">
                    <td className="not"><div className="language">Android</div></td>
                    <td><span className="badge-text">교내 앱창작터<br/>Android 과정 수료</span></td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                </tr>
                <tr className="ios">
                    <td className="not"><div className="language">iOS</div></td>
                    <td><span className="badge-text">교내 앱창작터<br/>iOS 과정 수료</span></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td></td>
                </tr>
                <tr className="ruby">
                    <td className="not"><div className="language">Ruby on rails</div></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td><span className="badge-text">멋쟁이사자처럼 4기</span></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td><span className="badge-text">SW마에스트로 10기<br/>(Foodiary)</span></td>
                    <td className="not"></td>
                </tr>
                <tr className="cpp">
                    <td>
                        <div className="language">C, C++</div>
                        <span className="badge-text">KOI 전국 장려<br/>(경상남도 금상 대표)</span>
                    </td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td>
                        <span className="badge-text">홍익 알고리즘 2위<br/>(2016)</span>
                    </td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td>
                        <span className="badge-text">홍익 알고리즘 2위<br/>(2019)</span>
                    </td>
                    <td></td>
                </tr>
                <tr className="python">
                    <td className="not"><div className="language">Python</div></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td><span className="badge-text">홍익 알고리즘 2위<br/>(2019)</span></td>
                    <td></td>
                </tr>
                <tr className="php">
                    <td><div className="language">php</div></td>
                    <td></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                    <td className="not"></td>
                </tr>
            </table>
            </Col>
        </Row>
    </Container>
  )
}