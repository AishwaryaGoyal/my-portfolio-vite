import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import ButtonIcon from "./components/common/ButtonIcon";

const fadeInAnimation = keyframes`
 from {
  opacity: 0;
 }
 to {
  opacity: 1;
 }
`;

export const GlobalStyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  animation: ${fadeInAnimation} 2s;
 }
 img,
 iframe {
  display: block;
 }
 button {
  background-color: transparent;
  border: none;
  cursor: pointer;
 }
 body {
  background: url(https://drive.google.com/uc?export=view&id=1GEgsBrqBm9ZyP5Grj9Bx4lz32FcuD36v);
  position: relative;
 }
`;

export const Container = styled.div`
 display: grid;
 margin: 0;
 gap: 1rem;
 grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
 justify-content: center;  

 @media (max-width: 960px) {
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
 }

 @media (max-width: 390px) {
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
 }
`;

export const Content = styled.main`
 grid-column: 1/ -1;
 display: flex;
 margin-left: 3rem;
 margin-right: 3rem;
 justify-content: center;
 align-items: flex-end;
 border-bottom: solid #dd5350; 

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

/*Header CSS*/
export const StyledHeader = styled.header`
 height: 4.4rem;
 grid-column: 1/ -1;
 display: flex;
 align-items: center;
 margin: 2rem 3rem 1rem;  

 @media (max-width: 960px) {
  display: none;
 }
`;

export const StyledHeaderStart = styled.div`
 margin-right: auto; 
`;

export const StyledHeaderMiddle = styled.div`
 flex-grow: 2;
 display: flex;
 justify-content: center;
 margin-left: 4%; 
`;

export const StyledHeaderEnd = styled.div`
 display: flex;
 justify-content: center;
 margin-left: auto; 
`;

export const LinkAboutAurora = styled(Link)`
 text-decoration: none;
`;

const emojiMoveAnimation = keyframes`
 from {
  transform: rotate(-45deg);
 }
 to {
  transform: rotate(45deg);
 }
`;

export const ImageEmoji = styled.img`
 transform-origin: center bottom;
 animation: ${emojiMoveAnimation} 0.5s;
 animation-iteration-count: infinite;
 animation-timing-function: ease-in-out;
 animation-direction: alternate;
 
 &:hover {
  animation: none;
  transform: scale(2);
 }
`;

export const TextAurora = styled.strong`
 font-family: cursive;
 color: #fdde8a;
 font-size: large; 
`;

export const HeaderMiddleButtons = styled(Link)`
 text-decoration: none;
 color: black;
 margin-right: 0.5rem;
 padding: 1rem 3.5rem;
 border-radius: 0.2rem;
 background-color: #fdde8a;
 font: 0.9rem "Fira Sans", sans-serif;
 transition: background-color 1s;
 font-family: "Zen Antique Soft";

 &:focus {
  border: 0.0625rem solid #dd5350;
 }

 &:hover {
  background-color: #dd5350;
  color: white;
 }
`;

/*
.home-btn.onHome,
.work-btn.onWork,
.about-btn.onAbout {
  
}*/
export const FaFacebook = styled.i`
 color: #4267b2;
 padding: 0.5rem;
 border-radius: 50%;
 background-color: white;
 background-clip: content-box;  

 &:hover {
  transform: scale(2);
 }
`;

export const FaInstagram = styled.i`
 padding: 0.5rem; 
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

 &:hover {
  transform: scale(2);
 }
`;

export const FaTwitter = styled.i`
 color: #1da1f2;
 padding: 0.5rem; 

 &:hover {
  transform: scale(2);
 }
`;

/*Header CSS for tablets*/
export const StyledHeaderHandheld = styled.header`
 height: 4.3rem;
 width: 100%;
 grid-column: 1/ -1;
 display: none;
 position: relative;
 position: sticky;
 background-color: #fdde8a;
 top: 0;
 left: 0;
 transition: height 1s;  

 @media (max-width: 960px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
 }

 @media (max-width: 390px) {
  height: 4.3rem;
  display: flex;
  flex-direction: column;
  &.clicked {
    height: 20.5rem;
  }
 }
`;

export const BtnTopHandheld = styled(Link)`
 text-decoration: none;
 border-bottom: 0.3rem solid #dd5350;
 color: black;
 padding: 1.2rem 3.95rem;
 border-radius: 0.2rem;
 font: 1.2rem "Fira Sans", sans-serif;
 transition: background-color 1s;

 &:hover {
  color: white;
  background-color: #dd5350;
 }

 @media (max-width: 390px) {
  display: none;
 }
`;

/*
.btn-work-handheld.onWork,
.btn-contact-handheld.onContact {
  
}

/*Footer CSS*/
export const StyledFooter = styled.footer`
 grid-column: 1/ -1;
 height: 4.8rem;
 width: 100%;
 position: sticky;
 bottom: 0;
 justify-content: center;
 align-items: center;
 background-color: #fdde8a;
 display: none;  

 @media (max-width: 960px) {
  display: flex;
  }

 @media (max-width: 390px) {
  display: none;
 }
`;

export const BtnsFooter = styled(Link)`
  color: black;

  &:hover {
    color: white;
  }

  ${props => props.className.includes("btn-home-footer") && css`
  margin-right: 4rem;
  `}
`;

/* 
.btn-home-footer.onHome,
.btn-about-footer.onAbout {
  
}*/
export const BtnMenu = styled(ButtonIcon)`
 text-decoration: none;
 display: none;
 margin-bottom: 0.8rem;
 color: black;
 padding: 1rem;
 width: 100%;
 border-radius: 0.2rem;
 font: 1rem "Fira Sans", sans-serif;
 font-weight: bolder;
 transition: background-color 1s;

 @media (max-width: 390px) {
 display: block;
 }
`;

export const BtnMenuDrop = styled(Link)`
 text-decoration: none;
 display: none;
 margin-bottom: 0.8rem;
 color: black;
 padding: 1rem;
 width: 100%;
 border-radius: 0.2rem;
 font: 1rem "Fira Sans", sans-serif;
 font-weight: bolder;
 transition: background-color 1s;

 &:hover {
  color: white;
  border-left: 1rem solid #dd5350;
  background-color: #dd5350;
 }

 @media (max-width: 390px) {
  &.clicked {
   display: block;
  }
 }
`;

/*
.fa-bars {
  color: white;
}

@media (max-width: 960px) {
  .btn-menu,
  .btn-menu-drop {
    display: none;
  }

@media (max-width: 960px) {
  #radio1 {
    left: 36%;
  }

  #radio2 {
    left: 44%;
  }

  #radio3 {
    left: 52%;
  }

  #radio4 {
    left: 60%;
  }

  #radio5 {
    left: 68%;
  }
}
*/
