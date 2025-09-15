import React from "react";

import "./footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <img src={logo} alt="" />
      </a>

      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer-copyright">
        <small>
          &copy; <a href="#">AhmedEissa </a>
          All right reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
