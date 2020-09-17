import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { workspaceApi } from "../../api";
import {
  Page,
  Navbar,
  Link,
  Popup,
  NavRight,
  Block,
  F7App,
} from "framework7-react";
import Footer from "../../components/Footer";
import GalleryWork from "./GalleryWork";
import GalleryWorkspace from "./GalleryWorkspace";
import GalleryPopupPage from "./GalleryPopupPage";

const Container = styled.div`
  padding-top: 15px;
`;

const GalleryContainer = (props) => {
  const [popupState, setPopupState] = useState({ work: {}, opened: false });
  const openPopup = useCallback((work) =>
    setPopupState((popupState) => ({ ...popupState, work, opened: true }))
  );
  const onPopupClosed = useCallback(() => {
    setPopupState((popupState) => ({ ...popupState, opened: false }));
  });

  return (
    <Page name="gallery">
      <Container>
        <GalleryWorkspace>
          {workspaceApi.getWorks().map((work, i) => (
            <GalleryWork key={i} {...work} openPopup={openPopup} />
          ))}
        </GalleryWorkspace>
        <Footer />
      </Container>
      <Popup
        className="work-popup"
        opened={popupState.opened}
        onPopupClosed={onPopupClosed}
      >
        <GalleryPopupPage {...popupState.work}></GalleryPopupPage>
      </Popup>
    </Page>
  );
};

export default GalleryContainer;
