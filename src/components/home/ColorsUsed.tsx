import React from "react";
import Button from "../common/Button";
import {Colors, BtnColor} from "../../styled-components/home.style"

interface ColorProps {
  colorsUsed:[{
    name: string;
    className: string;
    id: string;
  }];
}

function ColorsUsed(props:ColorProps) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color, index) => (
        <Colors className={color.className} key={color.id}>
          <BtnColor key={index} text={color.name} className="color-btn" />
        </Colors>
      ))}
    </>
  );
}

export default ColorsUsed;
