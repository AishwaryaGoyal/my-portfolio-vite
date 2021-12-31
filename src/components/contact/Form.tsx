import React from "react";
import {MainContact, StyledForm, StyledLabel, StyledInput, StyledTextArea, BtnSubmit} from "../../styled-components/contact.style";

function Form(props) {
  return (
    <MainContact>
      <StyledForm action="https://formspree.io/f/xyylqqkn" method="post">
        <StyledLabel htmlFor="name">
          Name:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="user_name"
          required
          autoFocus
        />

        <StyledLabel htmlFor="mail">
          E-mail:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </StyledLabel>
        <StyledInput
          type="email"
          id="mail"
          name="user_email"
          required
        />

        <StyledLabel htmlFor="msg">
          Message:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </StyledLabel>
        <StyledTextArea
          id="msg"
          name="user_message"
          required
        ></StyledTextArea>

        <BtnSubmit id="btnSubmit" type="submit">
          <strong>Send your message</strong>
        </BtnSubmit>

        <p>We will get back to you as soon as possible. ^_^</p>
      </StyledForm>
    </MainContact>
  );
}

export default Form;
