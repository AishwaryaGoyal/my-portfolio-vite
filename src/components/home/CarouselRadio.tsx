import React from "react";
import ButtonIcon from "../common/ButtonIcon";

interface CarouselRadioProps {
 radioButtons: {
  id:string;
  className: string;
 }[];
 onClick(e:Event):void;
 iClassNames:string;
 className:string;
}

function CarouselRadio(props:CarouselRadioProps) {
  const radioBtns = props.radioButtons.map((radio) => (
    <ButtonIcon
      id={radio.id}
      key={radio.id}
      className={`${radio.className} ${props.className}`}
      onClick={props.onClick}
      iClassNames={props.iClassNames}
    ></ButtonIcon>
  ));
  return <>{radioBtns}</>;
}

export default CarouselRadio;
