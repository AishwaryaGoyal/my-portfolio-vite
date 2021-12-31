import React from "react";

interface ButtonProps {
  className:string;
  id?:string;
  text:string;
}

function Button(props:ButtonProps) {
  return (
    <button className={props.className} type="button" id={props.id}>
      {props.text}
    </button>
  );
}

export default Button;
