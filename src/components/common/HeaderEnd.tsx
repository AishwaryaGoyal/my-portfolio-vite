import React from "react";
import {StyledHeaderEnd, FaFacebook, FaInstagram, FaTwitter} from "../../App.style";

function HeaderEnd() {
  return (
    <StyledHeaderEnd>
      <a
        className="btn-fb"
        href="https://www.facebook.com/aishwarya.goyal.37625/"
        target="_blank"
        rel="noreferrer"
        role="button"
      >
        <FaFacebook className="fab fa-facebook fa-2x"></FaFacebook>
      </a>
      <a
        className="btn-insta"
        href="https://www.instagram.com/bling2292/"
        target="_blank"
        rel="noreferrer"
        role="button"
      >
        <FaInstagram className="fab fa-instagram fa-2x"></FaInstagram>
      </a>
      <a
        className="btn-twit"
        href="https://twitter.com/Aurora2292"
        target="_blank"
        rel="noreferrer"
        role="button"
      >
        <FaTwitter className="fab fa-twitter fa-2x"></FaTwitter>
      </a>
    </StyledHeaderEnd>
  );
}

export default HeaderEnd;
