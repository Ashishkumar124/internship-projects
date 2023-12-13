import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/ashish-kumar-124983267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://www.instagram.com/become_webdev' target='_blank'>
        <BsInstagram />
      </a>
      <a href='Mailto:kumarashishdec07@gmail.com' target='_blank'>
        <SiGmail />
      </a>
    </div>
  );
};
export default HeaderSocials;
