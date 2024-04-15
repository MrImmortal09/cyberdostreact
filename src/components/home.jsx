import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
            <h1 className="primary-heading">
                CyberDost : Protect Yourself from Cybercrime
            </h1>
            <p className="primary-text">
                Cyberdost is a comprehensive website dedicated to providing users with
                the knowledge and tools to protect themselves from cybercrime. Stay
                Safe and Informed with us.
            </p>
            <button className="secondary-button">
                Explore now <FiArrowRight />{" "}
            </button>
            </div>
            <div className="home-image-section">
            <img src={BannerImage} alt="" />
            </div>
        </div>
      </div>
    );
  };
  
export default Home;
  