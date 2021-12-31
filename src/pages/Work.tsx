import React, { useEffect, useState } from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from "../components/work/Image";
import BigImage from "../components/work/BigImage";
import images from "../components/work/Images";
import {Container as WorkContainer} from "../App.style";

interface WorkProps {
  onWork?:string;
}

function Work(props:WorkProps) {
  const [srcBigImage, setSrcBigImage] = useState(null);

  function clickImage(e:Event) {
    setSrcBigImage(e.target.src);
  }

  function btnCloseClicked(e:Event) {
    setSrcBigImage(null);
  }

  return (
    <WorkContainer>
      <HeaderHandheld onWork={props.onWork} />
      <Header onWork={props.onWork} />
      <Image images={images} onClick={clickImage} />
      <Footer />
      {srcBigImage ? (
        <BigImage src={srcBigImage} btnCloseClicked={btnCloseClicked} />
      ) : null}
    </WorkContainer>
  );
}

export default Work;
