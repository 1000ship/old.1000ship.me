import React from "react";
import styled from "styled-components";
import { Page, Button } from "framework7-react";
import { rootApi } from "../../api";

let RootDir = rootApi.getRootPath();
const ThumbnailDir = `${RootDir}static/img/workspace/`;
const VideoDir = `${RootDir}static/video/`;
const TechIconDir = `${RootDir}static/tech-icons/`;
const TechIconList = [
  "air",
  "android",
  "flash",
  "framework7",
  "ios",
  "java",
  "javascript",
  "nodejs",
  "python",
  "rails",
  "react",
  "ruby",
  "swift",
  "php",
  "aws",
  "alternativa3d",
  "flask",
];
const IconsSupportingDarkMode = ["ios", "aws", "flask"];

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ImageFrame = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  background-image: url(${({src}) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
`;
const ImageBackdrop = styled.div`
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top:0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0;
  top: 0;
`;

const TechIconContainer = styled.div`
  margin: 3px;
`;
const TechIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url(${(props) => `${TechIconDir}${props.icon}.png`});
  background-size: cover;
  background-position: center center;
  margin-right: 5px;
  display: inline-block;
  .theme-dark & {
    background-image: url(${(props) => `${TechIconDir}${props.iconDark}.png`});
  }
`;
const Title = styled.div`
  font-size: 2em;
  font-weight: 500;
`;
const Description = styled.div`
  font-size: 1em;
  font-weight: 300;
  line-height: 15px;
  display: inline-block;
`;
const Date = styled.div`
  color: var(--primary-color-darker);
  margin: 2px 5px;
  display: inline;
  word-break: keep-all;
  font-size: 1em;
  font-weight: 500;
`;
const TagGroup = styled.div``;
const Tag = styled.div`
  border: 0.5px solid rgb(154, 154, 154);
  color: var(--text-color-2);
  font-size: 0.8em;
  font-weight: 100;
  display: inline-block;
  padding: 1px 3px;
  border-radius: 3px;
  margin-right: 3px;
  .theme-dark & {
    font-weight: 300;
  }
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  & .button {
    flex: 1;
    margin: 10px;
  }
`;

const GalleryPopupPage = (props) => {
  const {
    linkHref,
    imageName,
    supportVideo,
    videoName,
    title,
    description,
    createdYear,
    tags,
    techIcons,
    sizeContain,
  } = props;

  return (
    <Page>
      <Container>
        <ImageFrame src={`${ThumbnailDir + imageName}`}>
          <ImageBackdrop/>
          <Image alt={title} src={`${ThumbnailDir + imageName}`} />
        </ImageFrame>
        <Title>{title}</Title>
        <span>
          <Description>{description}</Description>
          <Date>{createdYear}</Date>
        </span>
        <TagGroup>
          {tags?.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagGroup>
        <TechIconContainer>
          {techIcons &&
            techIcons
              .filter((techIcon) => TechIconList.includes(techIcon))
              .map((techIcon, i) => {
                let techIconDark = techIcon;
                if (IconsSupportingDarkMode.includes(techIcon))
                  techIconDark += "-dark";
                return (
                  <TechIcon key={i} icon={techIcon} iconDark={techIconDark} />
                );
              })}
        </TechIconContainer>
        <ButtonGroup>
          <Button large fill href={linkHref} external target="_blank">
            자세히 보기
          </Button>
          <Button large fill popupClose color="red">
            닫기
          </Button>
        </ButtonGroup>
      </Container>
    </Page>
  );
};

export default GalleryPopupPage;
