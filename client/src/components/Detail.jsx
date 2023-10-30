import React from "react";
import image from "../images/detail.jpg";
import "../styles/detail.css";

const Detail = () => {
  return (
    <div className="">
    <section className="hero row">
      <div className="hero-content col-md-6">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
         Health is crucial that we come together to reaffirm our commitment to the well-being of our community and to recognize the symbiotic relationship between individual health and our collective responsibility.
        </p>
      </div>
      <div className="hero-img col-md-6">
        <img
          src={image}
          alt="Detail"
        />
      </div>
    </section></div>
  );
};

export default Detail;