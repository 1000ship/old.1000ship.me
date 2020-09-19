import React from "react";
import styled from "styled-components";
import { workspaceApi } from "../../api";
import { Page, Navbar, Link } from "framework7-react";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import MeSkill from "./MeSkill";

const InstagramLink = "https://www.instagram.com/1000ship/";
const FacebookLink = "https://www.facebook.com/1000ship";
const YoutubeLink = "https://www.youtube.com/channel/UCABGTT1zjQgvkejvugkmdig";
const BlogLink = "https://blog.naver.com/cjstjdgur123";

const NameText = styled.h1`
  font-size: 3em;
  text-align: center;
  margin: 10px auto;
`;
const JobText = styled.span`
  font-size: 1.5em;
  color: var(--text-color-inverse);
  background-color: var(--bg-color-inverse);
  text-align: center;
  margin: 10px auto;
  padding: 3px 10px;
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: space-around;
`;
const IconItem = styled.li``;
const IconButton = styled(Link)`
  color: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  & ion-icon {
    font-size: 3em;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const IconTitle = styled.span``;

const Section = styled.section`
  ${({flex}) => flex &&`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
const SectionTitle = styled.h2``;
const SectionParagraph = styled.p``;

const MePresenter = (props) => {
  const skillList = [
    {
      name: "Javascript",
      percent: 80,
    },
    {
      name: "ActionScript",
      percent: 100,
    },
    {
      name: "Python",
      percent: 90,
    },
    {
      name: "Ruby",
      percent: 30,
    },
    {
      name: "Swift",
      percent: 25,
    },
  ];

  return (
    <Page name="me">
      <Container>
        <Section flex>
          <NameText>천성혁</NameText>
          <JobText>
            <small>Wannabe</small> Front-end Developer
          </JobText>
        </Section>
        <hr></hr>
        <Section>
          <SectionTitle>Social Network Activity</SectionTitle>
          <IconList>
            <IconItem>
              <IconButton href={InstagramLink} target="_blank" external>
                <ion-icon name="logo-instagram"></ion-icon>
                <IconTitle>Instagram</IconTitle>
              </IconButton>
            </IconItem>
            <IconItem>
              <IconButton href={FacebookLink} target="_blank" external>
                <ion-icon name="logo-facebook"></ion-icon>
                <IconTitle>Facebook</IconTitle>
              </IconButton>
            </IconItem>
            <IconItem>
              <IconButton href={YoutubeLink} target="_blank" external>
                <ion-icon name="logo-youtube"></ion-icon>
                <IconTitle>Youtube</IconTitle>
              </IconButton>
            </IconItem>
            <IconItem>
              <IconButton href={BlogLink} target="_blank" external>
                <ion-icon name="newspaper"></ion-icon>
                <IconTitle>Blog</IconTitle>
              </IconButton>
            </IconItem>
          </IconList>
        </Section>
        <hr></hr>
        <Section>
          <SectionTitle>Skill</SectionTitle>
          {skillList.map((skill) => (
            <MeSkill {...skill}></MeSkill>
          ))}
        </Section>
      </Container>
      <Footer />
    </Page>
  );
};

export default MePresenter;
