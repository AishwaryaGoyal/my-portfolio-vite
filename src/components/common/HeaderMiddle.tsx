import React from "react";
import { Link } from "react-router-dom";
import {StyledHeaderMiddle, HeaderMiddleButtons} from "../../App.style";

function HeaderMiddle(props) {
  return (
    <StyledHeaderMiddle>
      <HeaderMiddleButtons to="/" className={`home-btn ${props.onHome}`}>
        Home
      </HeaderMiddleButtons>

      <HeaderMiddleButtons to="/work" className={`work-btn ${props.onWork}`}>
        Work
      </HeaderMiddleButtons>

      <HeaderMiddleButtons to="/about" className={`about-btn ${props.onAbout}`}>
        About
      </HeaderMiddleButtons>
    </StyledHeaderMiddle>
  );
}
export default HeaderMiddle;
