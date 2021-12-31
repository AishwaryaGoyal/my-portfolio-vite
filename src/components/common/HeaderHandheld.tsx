import React from "react";
import {StyledHeaderHandheld, BtnTopHandheld, BtnMenu, BtnMenuDrop} from "../../App.style";

interface HeaderHandheldProps {
onWork?:string;
onContact?:string;
}


function HeaderHandheld(props:HeaderHandheldProps) {
  function menuClick() {
    const header = document.querySelector(".header-handheld");
    const menuBtns = document.querySelectorAll(".btn-menu-drop");

    menuBtns.forEach((el) => el.classList.toggle("clicked"));
    header.classList.toggle("clicked");
  }

  return (
    <StyledHeaderHandheld className="header-handheld">
      <BtnTopHandheld to="/work" className={`btn-work-handheld ${props.onWork}`}>
        Work
      </BtnTopHandheld>
      <BtnTopHandheld to="/contact" className={`btn-contact-handheld ${props.onContact}`}>
        Contact
      </BtnTopHandheld>

      {/*--For mobile devices---floating menu--*/}
      <BtnMenu
        className="btn-menu"
        onClick={menuClick}
        iClassNames="fas fa-bars fa-2x"
      />
      <BtnMenuDrop to="/" className="btn-menu-drop">
        Home
      </BtnMenuDrop>
      <BtnMenuDrop to="/work" className="btn-menu-drop">
        Work
      </BtnMenuDrop>
      <BtnMenuDrop to="/contact" className="btn-menu-drop">
        Contact
      </BtnMenuDrop>
      <BtnMenuDrop to="/about" className="btn-menu-drop">
        About
      </BtnMenuDrop>
    </StyledHeaderHandheld>
  );
}

export default HeaderHandheld;
