import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
    return (
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          {/* <p className="primary-subheading">Why trust CyberDost?</p> */}
          <h1 className="primary-heading">
            Cyber-Security is an essential part of our daily lives
          </h1>
          <p className="primary-text">
            CyberDost is a trusted platform that empowers indivisuals to take
            control of their online security.
          </p>
          <p className="primary-text">
            Our commimtment to privacy and data
            protection ensures a safe and secure online experience for all users.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default About;
  