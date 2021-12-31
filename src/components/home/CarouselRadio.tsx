import React from "react";
//import { RadiosButtonIcon } from "../../styled-components/home.style";
import ButtonIcon from "../common/ButtonIcon";

function CarouselRadio(props) {
  const radioBtns = props.radioButtons.map((radio) => (
    <ButtonIcon
      id={radio.id}
      key={radio.id}
      className={props.className}
      onClick={props.onClick}
      iClassNames={props.iClassNames}
    ></ButtonIcon>
  ));
  return <div>{radioBtns}</div>;
}

export default CarouselRadio;
