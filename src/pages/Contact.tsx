import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Form from "../components/contact/Form";
import { StyledHeart1, StyledHeart2, StyledHeart3, StyledHeart4, StyledHeart5 } from "../styled-components/contact.style";
import {Container as ContactContainer} from "../App.style";

interface ContactProps {
  onContact?:string;
}

function Contact(props:ContactProps) {
  return (
    <>
      <StyledHeart1 className="heart1 fas fa-heart"></StyledHeart1>
      <StyledHeart2 className="heart2 fas fa-heart"></StyledHeart2>
      <StyledHeart3 className="heart3 fas fa-heart"></StyledHeart3>
      <StyledHeart4 className="heart4 fas fa-heart"></StyledHeart4>
      <StyledHeart5 className="heart5 fas fa-heart"></StyledHeart5>
      <ContactContainer>
        <HeaderHandheld onContact={props.onContact} />
        <Header />
        <Form />
        <Footer />
      </ContactContainer>
    </>
  );
}

export default Contact;
