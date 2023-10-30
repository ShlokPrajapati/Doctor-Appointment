import React from "react";
import image from "../images/about.jpg";
import '../styles/about.css'

const AboutUs = () => {
  return (
    <>
      <div className="container ">
        <h2 className="page-heading ">About Us</h2>
        <div className="row about">
          <div className="hero-img col-md-6">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content col-md-6">
            <p>
            At Doctors Point, our vision is to be a beacon of health and wellness, setting the standard for excellence in patient-centered care, medical innovation, and community engagement.
            </p>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;