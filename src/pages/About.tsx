import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import MainContent from "../components/about/MainContent";
import Footer from "../components/common/Footer";
import {Container as AboutContainer} from "../App.style";

interface AboutProps {
  onAbout?:string;
}

function About(props:AboutProps) {
  return (
    <AboutContainer>
      <HeaderHandheld />
      <Header onAbout={props.onAbout} />
      <MainContent />
      <Footer onAbout={props.onAbout} />
    </AboutContainer>
  );
}

export default About;
