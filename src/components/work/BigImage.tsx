import React, { useState } from "react";
import images from "./Images";
import {TransparentDiv, BigImage as StyledBigImage, CloseBtn, LeftArrowBtn, RightArrowBtn} from "../../styled-components/work.style";

interface BigImageProps {
src: string;
btnCloseClicked(e:Event):void;
}

function BigImage(props:BigImageProps) {
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

        <LeftArrowBtn
          id="leftArrowBig"
          onClick={leftArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-left fa-3x"
        />
        
        <RightArrowBtn
          id="rightArrowBig"
          onClick={rightArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-right fa-3x"
        />
      </StyledBigImage>
    </>
  );
}

export default BigImage;
