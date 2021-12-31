import React from "react";
import {CarouselImages} from "../../styled-components/home.style";

interface CarouselImageProps {
 image: {
  key:string,
  src:string,
  alt:string,
 }
}

function CarouselImage(props:CarouselImageProps) {
  return (
    <CarouselImages key={props.image.key} className="carouselImages">
      <img src={props.image.src} alt={props.image.alt} height="100%" />
    </CarouselImages>
  );
}

export default CarouselImage;
