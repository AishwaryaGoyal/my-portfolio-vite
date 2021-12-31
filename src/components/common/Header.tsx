import React from "react";
import HeaderStart from "./HeaderStart";
import HeaderMiddle from "./HeaderMiddle";
import HeaderEnd from "./HeaderEnd";
import {StyledHeader} from "../../App.style";

function Header(props) {
  return (
    <StyledHeader>
      <HeaderStart />
      <HeaderMiddle
        onHome={props.onHome}
        onWork={props.onWork}
        onAbout={props.onAbout}
      />
      <HeaderEnd />
    </StyledHeader>
  );
}

export default Header;
