import React from "react";
import {Colors, BtnColor} from "../../styled-components/home.style"

interface ColorProps {
  colorsUsed:{
    name: string;
    className: string;
    id: string;
  }[];
}

function ColorsUsed(props:ColorProps) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color) => (
        <Colors className={color.className} key={color.id}>
          <BtnColor text={color.name} className="color-btn" />
        </Colors>
      ))}
    </>
  );
}

export default ColorsUsed;
