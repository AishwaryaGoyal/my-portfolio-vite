import styled, { keyframes } from "styled-components";
import Button from "../components/common/Button";
import ButtonIcon from "../components/common/ButtonIcon";
import CarouselRadio from "../components/home/CarouselRadio"

export const IntroText = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 width: 60rem;
` ;

export const VLargeText = styled.h1`
 font-size: 4rem;
 font-family: "Zen Antique Soft"; 

 @media (max-width: 390px) {
  font-size: 2rem;
 }
`;

export const LargeText = styled.h2`
 font-size: 1.5rem;
 font-family: "Roboto Mono";

 @media (max-width: 390px) {
  font-size: 1rem;
 }
`;

export const SmallText = styled.p`
 font-family: "Roboto Mono";
 color: white;
 font-size: 1.03rem; 
`;

export const BtnContactUs = styled(Button)`
 color: white;
 background-color: #dd5350;
 padding: 1rem 3rem 1rem 3rem;
 border-radius: 0.2rem;
 align-self: flex-start;
 margin-top: 1rem;
 margin-bottom: 1rem;
 font-size: 1.03rem;

 &:visited {
  color: white;
 }

 &:hover {
  background-color: #7c8453;
 }

 @media (max-width: 960px) {
  display: none;
 }
`;

export const DivImageAvatar = styled.div`
 @media (max-width: 960px) {
  & > img {
   width: 100%;
  } 
 } 
`;

export const WorkMain = styled.main`
 grid-column: 1/ -1;
 margin: 0 2rem;
 display: flex;
 background-color: white;
 align-items: center;
 border-radius: 2rem;

 @media (max-width: 960px) {
  margin: 0 1rem;
  flex-wrap: wrap;
  justify-content: center;
 }

 @media (max-width: 390px) {
  flex-wrap: wrap;
  margin: 0 0.2rem;
  justify-content: center;
 }
`;

export const VideoContainer = styled.div`
 margin: 2rem 4rem 3rem 4rem;
 border-radius: 2rem;
 background-color: black;
 &:hover {
  & iframe {
   opacity: 0.6;
  }
 }

 @media (max-width: 390px) {
  margin-bottom: 1.1rem;
 }
`;

export const IFrame = styled.iframe`
 border-radius: 2rem;
 box-shadow: 0.5rem 0.5rem 1rem 1rem black;
 transition: opacity 1s;

 @media (max-width: 390px) {
   height: 410px;
 }
`;

export const ExplanationWork = styled.div`
 text-align: justify;
 text-justify: auto;
 font-family: "Zen Antique Soft";
 margin: 2rem;

 @media (max-width: 960px) {
  margin-top: 0;
 }

 @media (max-width: 390px) {
  margin-top: 0;
 }
`;

export const Colors = styled.div`
 display: inline-block;
 position: relative;
 margin-right: 0.3rem;
 padding: 10px 0;
 border-radius: 50%;
 width: 25px;
 height: 25px;
 transition: all 0.5s ease-in-out;

 &.burntumber {
  background-color: #6e260e;
   &:hover {
    border: 1px solid #6e260e;
   }
  }

 &.crimsonred {
  background-color: #990000;
   &:hover {
    border: 1px solid #990000;
   }
  }
  
  &.burntsienna {
   background-color: #e97451;
    &:hover {
     border: 1px solid #e97451;
    }
   }
  
  &.yellowochre {
   background-color: #cb9d06;
    &:hover {
     border: 1px solid #cb9d06;
    }
   }
  
  &.prussianblue {
   background-color: #003153;
    &:hover {
     border: 1px solid #003153;
    }
   }

  &.cobaltblue {
   background-color: #0047ab;
    &:hover {
     border: 1px solid #0047ab;
    }
   }
   
 &:hover {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 130px;
  background-color: white;
 
  & Button {
   display: block;
   opacity: 1;
  }
 } 
 `;

export const BtnColor = styled(Button)`
 display: none;
 position: absolute;
 left: 0;
 top: 0;
 opacity: 0;
 transition: opacity 0.5s ease-in-out;
 width: 130px;
 height: 25px;
`;

export const AllColorsText = styled.span`
 background: radial-gradient(
  circle at 30% 107%,
 #fdf497 0%,
 #fdf497 5%,
 #fd5949 45%,
 #d6249f 60%,
 #285aeb 90%
  );
 -webkit-background-clip: text;
 background-clip: text;
 -webkit-text-fill-color: transparent;
`;

/* Carousel CSS */
export const Carousel = styled.div`
 margin: 2rem;
 border-radius: 2rem;
 grid-column: 1/ -1;
 justify-self: center;
 width: 45rem;
 height: 30rem;
 position: relative;
 box-shadow: 10px -10px 5px black;

 @media (max-width: 960px) {
  width: 20rem;
  height: 15rem;
 }

 @media (max-width: 390px) {
  display: none;
 }
`;

export const CarouselImages = styled.div`
 left: 0;
 top: 0;
 position: absolute;
 overflow: hidden;
 border-radius: 2rem;
 width: 100%;
 height: 100%; 
`;

const fadeInArrowsRadios = keyframes`
 from {
  opacity: 0;
 }
 to {
  opacity: 0.7;
 }
`;

export const StyledCarouselRadio = styled(CarouselRadio)`
 opacity: 0.7;
 position: absolute;
 top: 93%;
 animation: ${fadeInArrowsRadios} 2s;
 &:hover {
  transform: scale(1.8);
  cursor: pointer;
 }
 
 &.radio1 {
  left: 44%;
 }

 &.radio2 {
  left: 47%;
 }

 &.radio3 {
  left: 50%;
 }

 &.radio4 {
  left: 53%;
 }

 &.radio5 {
  left: 56%;
 }

 @media (max-width: 960px) {
  &.radio1 {
   left: 36%;
  }
  &.radio2 {
   left: 44%;
  }
  &.radio3 {
   left: 52%;
  }
  &.radio4 {
   left: 60%;
  }
  &.radio5 {
   left: 68%;
  }
}
`;

export const LeftArrowButtonIcon = styled(ButtonIcon)`
 opacity: 0.7;
 position: absolute;
 top: 50%;
 transition: all 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 animation: ${fadeInArrowsRadios} 2s; 
 right: 101%;

 &:hover {
  transform: scale(1.8);
  cursor: pointer;
 } 

 & .fas {
 color: white;
 transition: color 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 }

 &:hover{
  & .fas {
  color: #dd5350;
  }
 }
`;

export const RightArrowButtonIcon = styled(ButtonIcon)`
 opacity: 0.7;
 position: absolute;
 top: 50%;
 transition: all 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 animation: ${fadeInArrowsRadios} 2s; 
 left: 101%;

 &:hover {
  transform: scale(1.8);
  cursor: pointer;
 } 

 & .fas {
 color: white;
 transition: color 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 }

 &:hover{
  & .fas {
  color: #dd5350;
 }
 }
`;
 
 
