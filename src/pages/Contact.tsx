import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Form from "../components/contact/Form";
import { StyledHeart } from "../styled-components/contact.style";
import {Container as ContactContainer} from "../App.style";

function Contact(props) {
  return (
    <>
      <StyledHeart className="heart1 fas fa-heart"></StyledHeart>
      <StyledHeart className="heart2 fas fa-heart"></StyledHeart>
      <StyledHeart className="heart3 fas fa-heart"></StyledHeart>
      <StyledHeart className="heart4 fas fa-heart"></StyledHeart>
      <StyledHeart className="heart5 fas fa-heart"></StyledHeart>
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
