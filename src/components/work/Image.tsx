import React from "react";
import Work from "../../pages/Work";
import {WorksMain, ImgVideoContainer} from "../../styled-components/work.style";

function Image(props) {
  const images = props.images.map((prop, index) => (
    <ImgVideoContainer key={index}>
      <img
        src={prop.src}
        alt={prop.alt}
        key={prop.src}
        onClick={props.onClick}
      />
    </ImgVideoContainer>
  ));

  return <WorksMain>{images}</WorksMain>;
}

export default Image;
