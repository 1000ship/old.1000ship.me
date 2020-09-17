import React, { useCallback } from "react";
import styled from "styled-components";
import { rootApi } from "../../api";
import { Link } from "framework7-react";
import Framework7 from "framework7";

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

const Work = styled.div`
  cursor: pointer;
  margin: 10px;
  flex: 1 1 300px;
  position: relative;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
`;
const ThumbnailFrame = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  ${({ src }) =>
    src
      ? `background-image: url(${src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;`
      : null}
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ contain }) => (contain ? "contain" : "cover")};
  object-position: center;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.04);
  }
  ${({ contain }) =>
    contain &&
    `
  position: absolute;
  left: 0;
  top: 0;
  `}
`;
const ThumbnailBackdrop = styled.div`
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const Title = styled.div`
  color: --1000ship-text-color-inverse;
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  font-size: 1.3em;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 0px 3px;
`;


const GalleryWork = (props) => {
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
    sizeContain = false,
    openPopup,
  } = props;

  const onWorkClick = (e) => {
    openPopup({
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
    });
  };

  return (
    <Work onClick={onWorkClick}>
      {/* {Framework7.device.desktop && supportVideo ? (
            <>
              <Video
                autoPlay
                loop
                muted
                poster={`${ThumbnailDir + imageName}`}
                className="d-none d-md-block"
              >
                <source src={`${VideoDir + videoName}`} type="video/mp4" />
              </Video>
              <img
                alt={title}
                src={`${ThumbnailDir + imageName}`}
                className="lazy lazy-fade-in d-block d-md-none"
              />
            </>
          ) : (
            <img
              alt={title}
              src={`${ThumbnailDir + imageName}`}
              className="lazy lazy-fade-in"
            />
          )} */}
      <ThumbnailFrame
        src={sizeContain ? `${ThumbnailDir + imageName}` : null}
        popupOpen=".work-popup"
      >
        {sizeContain && <ThumbnailBackdrop />}
        <Thumbnail
          contain={sizeContain}
          alt={title}
          src={`${ThumbnailDir + imageName}`}
          className="lazy lazy-fade-in"
        />
      </ThumbnailFrame>
      <Title>{title}</Title>
    </Work>
  );
};

export default GalleryWork;
