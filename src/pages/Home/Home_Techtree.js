import React from 'react'
import Container from '../../components/Container'
import { Row, Col } from 'framework7-react'
import styled from 'styled-components'

const TechIconList = ["air", "flash", "android", "framework7", "ios", "java", "javascript", "nodejs", "python", "rails", "react", "ruby", "swift", "php", "aws"]
const IconsSupportingDarkMode = ["ios", "aws"]

const Title = styled.h3`
    margin-left: 16px;
`

const TechIcon = styled(Col)`
  height: 100px;
  margin: 10px 0px;
  background-image: url(${ props => `../../static/tech-icons/original/${props.icon}.png`});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: 0.5s !important;
  .theme-dark & {
    background-image: url(${ props => `../../static/tech-icons/original/${props.iconDark}.png`});
  }
  &:hover {
    transform: scale(1.2);
  }
`

export default (props) => {
  return (
    <Container>
      <Col width="100"><Title className="partial-title">🛠 Tech-Icons what I used at least once</Title></Col>
      <Row>
        {
          TechIconList.map( (iconName, i) => {
            return (<TechIcon
              key={i}
              width="33"
              medium="20"
              icon={iconName}
              iconDark={IconsSupportingDarkMode.includes(iconName)?`${iconName}-dark`:iconName}
            />)
            })
        }
      </Row>
    </Container>
  )
}