import React from 'react'
import Container from '../../components/Container'
import { Row, Col } from 'framework7-react'
import styled from 'styled-components'
import { rootApi } from '../../api'

let RootDir = rootApi.getRootPath()
const TechIconDir = `${RootDir}static/tech-icons/original/`
const TechIconList = ["air", "flash", "android", "framework7", "ios", "java", "javascript", "nodejs", "python", "rails", "react", "ruby", "swift", "php", "aws", "flask"]
const IconsSupportingDarkMode = ["ios", "aws", "flask"]

const Title = styled.h3`
    margin-left: 16px;
`

const TechIcon = styled(Col)`
  height: 100px;
  margin: 10px 0px;
  background-image: url(${ props => `${TechIconDir}${props.icon}.png`});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: 0.5s !important;
  .theme-dark &{
    background-image: url(${ props => `${TechIconDir}${props.iconDark}.png`});
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
              medium="25"
              large="20"
              icon={iconName}
              iconDark={IconsSupportingDarkMode.includes(iconName)?`${iconName}-dark`:iconName}
            />)
            })
        }
      </Row>
    </Container>
  )
}