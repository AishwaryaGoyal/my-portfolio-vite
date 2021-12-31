import React from "react";
import { Link } from "react-router-dom";
import {StyledFooter, BtnsFooter} from "../../App.style";

function Footer(props) {
  return (
    <StyledFooter>
      <BtnsFooter to="/" className={`btn-home-footer ${props.onHome}`}>
        <i className="fas fa-home fa-2x"></i>
      </BtnsFooter>

      <BtnsFooter to="/about" className={`btn-about-footer ${props.onAbout}`}>
        <i className="fas fa-user-circle fa-2x"></i>
      </BtnsFooter>
    </StyledFooter>
  );
}

export default Footer;
