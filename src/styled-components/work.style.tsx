import styled, {css, keyframes} from "styled-components";
import ButtonIcon from "../components/common/ButtonIcon";

export const WorksMain = styled.main`
 grid-column: 1/ -1;
 margin: 1rem 2rem;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
 gap: 1rem;

 @media (max-width: 960px) {
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  margin: 0 1rem;
 }

 @media (max-width: 390px) {
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
 }
`;

export const ImgVideoContainer = styled.div`
 border-radius: 2rem; 
 & img {
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0.5rem double #dd5350;
 }
 &:hover {
  cursor: zoom-in;
 }
`;

const fadeInAnimation = keyframes`
 from {
  opacity: 0;
 }
 to {
  opacity: 0.8;
 }
`;

export const TransparentDiv = styled.div`
 background-color: black;
 opacity: 0.8;
 position: fixed;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 animation: ${fadeInAnimation} 2s;  
`;

const imageLoad = keyframes`
 0% {
  transform: scale(0);
 }

 100% {
  transform: scale(1);
 }
`;

export const BigImage = styled.div`
 position: fixed;
 top: 5%;
 left: 5%;
 width: 90%;
 height: 90%; 
 & > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  animation: ${imageLoad} 2s;
 }
`;

const oneTimeRotate = keyframes`
 from {
 }
 to {
  transform: rotateZ(180deg);
 }
`;

export const CloseBtn = styled(ButtonIcon)`
 position: fixed;
 top: 5%;
 right: 5%;
 animation: 2s ease-in-out 1s 1 running ${oneTimeRotate};
 transition: all ease-in-out 1s;
 &:hover {
  transform: rotateZ(-180deg) scale(0.7);
  & .fa-window-close {
   color: #fdde8a;
  }
 }
 & .fa-window-close {
  transition: color ease-in-out 1s;
  color: white;
 }
`;

const fadeInArrows = keyframes`
 from {
  opacity: 0;
 }
 to {
  opacity: 1;
 }
`;

export const LeftArrowBtn = styled(ButtonIcon)`
 position: absolute;
 top: 45%;
 transition: all 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 animation: ${fadeInArrows} 2s; 
 right: 85%;
    

 &:hover {
  transform: scale(1.8);
  & .fas {
   color: #fdde8a;
  }
 }

 & .fas {
  color: white;
  transition: color 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 }
`;

export const RightArrowBtn = styled(ButtonIcon)`
 position: absolute;
 top: 45%;
 transition: all 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 animation: ${fadeInArrows} 2s; 
 left: 85%;

 &:hover {
  transform: scale(1.8);
  & .fas {
   color: #fdde8a;
  }
 }

 & .fas {
  color: white;
  transition: color 1s cubic-bezier(0.29, 2.01, 0.5, -0.68);
 }
`;
