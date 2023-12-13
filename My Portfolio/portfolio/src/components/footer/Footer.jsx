import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Ashish Kumar
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/become_webdev'>
          <FaInstagram />
        </a>
        <a href='https://www.linkedin.com/in/ashish-kumar-124983267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/i/flow/login'>
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
      <small> &copy; AshishKumar All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
