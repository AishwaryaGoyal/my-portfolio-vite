import React from "react";
import { FaSquare } from "../../styled-components/carouselFaSquare.style"

interface ButtonIconProps {
  id?:string;
  className?:string;
  onClick(e:Event):void;
  iClassNames:string;
}
function ButtonIcon(props:ButtonIconProps) {
  return (
    <button
      type="button"
      id={props.id}
      key={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      <FaSquare className={props.iClassNames}></FaSquare>
    </button>
  );
}

export default ButtonIcon;
