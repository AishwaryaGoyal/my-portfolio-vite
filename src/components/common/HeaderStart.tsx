import React from "react";
import {StyledHeaderStart, LinkAboutAurora, ImageEmoji, TextAurora} from "../../App.style";

function HeaderStart() {
  return (
    <StyledHeaderStart>
      <LinkAboutAurora to="/about" className="about-aurora">
        <ImageEmoji
          src="https://drive.google.com/uc?export=view&id=1hnEiYpoWR_MXa2QyGsqySRDok3AE1kG8"
          className="emoji"
          alt="Emoji"
          width="60px"
        />
        <TextAurora className="txt-aurora">Aurora</TextAurora>
      </LinkAboutAurora>
    </StyledHeaderStart>
  );
}
export default HeaderStart;
