import React from "react";
import {VideoContainer, IFrame} from "../../styled-components/home.style"

interface VideoProps {
 title: string;
 src:string;
 }

function Video(props:VideoProps) {
  return (
    <VideoContainer>
      <IFrame title={props.title} src={props.src} height="430"></IFrame>
    </VideoContainer>
  );
}

export default Video;
