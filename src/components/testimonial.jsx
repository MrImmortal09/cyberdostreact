import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
    return (
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Testimonial</p>
          <h1 className="primary-heading">What They Are Saying</h1>
          {/* <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p> */}
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            "Empowering. Informative. Essential. The cybersecurity awareness project keeps me updated on cyber threats, offers a supportive forum, and provides valuable resources to stay safe online. It's a must-have for anyone navigating the digital world."
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Om Swami</h2>
        </div>
      </div>
    );
  };
  
export default Testimonial;
  