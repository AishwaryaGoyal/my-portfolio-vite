import React from "react";
import MainContentLeft from "./MainContentLeft";
import MainContentRight from "./MainContentRight";
import {Content} from "../../App.style";

function MainContent() {
  return (
    <Content>
      <MainContentLeft />
      <MainContentRight />
    </Content>
  );
}

export default MainContent;
