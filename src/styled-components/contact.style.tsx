import styled, {css, keyframes} from "styled-components";

const heartAnimation = keyframes`
 0% {
  top: -10%;
 }
 25% {
  top: 25%;
  transform: rotateY(180deg);
 }
 50% {
  top: 50%;
  transform: rotateY(45deg);
 }
 75% {
  top: 75%;
  transform: rotateZ(-30deg);
 }
 100% {
  top: 90%;
  transform: rotateY(180deg);
 }
`;

export const StyledHeart = styled.i`
 color: #dd5350;
 ${(props) => {
   props.className.includes("heart1") && css`
    left: 10%;
    position: absolute;
    animation: ${heartAnimation} 10s steps(5, jump-start) 1s infinite;
    `;
    props.className.includes("heart2") && css`
     left: 20%;
     position: absolute;
     animation: ${heartAnimation} 25s steps(5, jump-start) 5s infinite;
    `;
    props.className.includes("heart3") && css`
  "   left: 30%;
     position: absolute;
     animation: ${heartAnimation} 5s steps(5, jump-start) 0s infinite;
    `;
    props.className.includes("heart4") && css`
     left: 75%;
     position: absolute;
     animation: ${heartAnimation} 20s steps(5, jump-start) 3s infinite;
    `;
    props.className.includes("heart5") && css`
     left: 90%;
     position: absolute;
     animation: ${heartAnimation} 15s steps(5, jump-start) 2s infinite;
    `;
  }
 }
`;

export const MainContact = styled.div`
 grid-column: 1/ -1;
 margin: 2rem;
 justify-self: center;
 display: flex;
`;

export const StyledForm = styled.form`
 grid-column: 1/ -1;
 margin-left: 1%;
 display: flex;
 flex-direction: column;
`;

export const StyledLabel = styled.label`
 margin-right: auto;
 font: 1rem Roboto-Regular;
 margin-bottom: 0.5rem;  
`;

export const StyledInput = styled.input`
 border: none;
 margin-bottom: 1.5rem;
 font: 1rem Roboto-Regular;
 border-radius: 0.3rem;
 padding: 0.5rem;
 width: 22rem;  

 @media (max-width: 390px) {
  width: 18rem;
 }
`;

export const StyledTextArea = styled.input`
 border: none;
 margin-bottom: 1.5rem;
 font: 1rem Roboto-Regular;
 border-radius: 0.3rem;
 padding: 0.5rem;
 width: 22rem;  
 height: 13rem;

 @media (max-width: 390px) {
  height: 8rem;
  width: 18rem;
 }
`;

export const BtnSubmit = styled.button`
 padding: 0.8rem 1rem;
 background-color: #dd5350;
 color: white;
 border-style: none;
 border-radius: 0.2rem;
 width: 22rem; 

 &:hover {
  background-color: #7c8453;
 }

 @media (max-width: 390px) {
  width: 18rem;
 }
`;
