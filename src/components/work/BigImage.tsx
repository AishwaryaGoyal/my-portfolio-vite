import React, { useState } from "react";
import ButtonIcon from "../common/ButtonIcon";
import images from "./Images";
import {TransparentDiv, BigImage as StyledBigImage, CloseBtn, ArrowBtns} from "../../styled-components/work.style";

function BigImage(props) {
  const [imageSrc, setImageSrc] = useState(props.src);
  const noOfImages = images.length;

  function leftArrowBigClicked() {
    const index = images.findIndex((image) => image.src === imageSrc);
    const newSrc = (images[index - 1] || images[noOfImages - 1]).src;

    setImageSrc(newSrc);
  }

  function rightArrowBigClicked() {
    const index = images.findIndex((image) => image.src === imageSrc);
    const newSrc = (images[index + 1] || images[0]).src;

    setImageSrc(newSrc);
  }

  return (
    <>
      <TransparentDiv />
      <StyledBigImage>
        <img src={imageSrc} alt="Big size" />
        <CloseBtn
          id="closeBtn"
          onClick={props.btnCloseClicked}
          iClassNames="far fa-window-close fa-2x"
        />
        <ArrowBtns
          id="leftArrowBig"
          onClick={leftArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-left fa-3x"
        />
        <ArrowBtns
          id="rightArrowBig"
          onClick={rightArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-right fa-3x"
        />
      </StyledBigImage>
    </>
  );
}

export default BigImage;
