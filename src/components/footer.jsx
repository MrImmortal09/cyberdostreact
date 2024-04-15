import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            {/* <img src={Logo} alt="" /> */}
            <h1>Cyberdost</h1>
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>About us</span>
            <span>FAQ</span>
            <span>Services</span>
            <span>Carrers</span>
            <span>Testimonials</span>
            <span>Forum</span>
          </div>
          <div className="footer-section-columns">
            <span>123456789</span>
            <span>cyberdost@gmail.com</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    );
  };
  
export default Footer;
  