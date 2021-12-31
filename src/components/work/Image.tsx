import React from "react";
import {WorksMain, ImgVideoContainer} from "../../styled-components/work.style";

interface ImageProps {
images: {
  src:string;
  alt:string;
}[];
onClick(e:Event):void;
}

function Image(props:ImageProps) {
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
