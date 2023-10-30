import React, { useEffect, useState, Fragment } from "react";

import Detail from "../components/Detail";
import AboutUs from "../components/About";
import Circles from "../components/Circles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  document.title= "Doctor's Appointment"
  
  return (
    <>
        <Navbar/>
        <Detail/>
        <AboutUs/>
        <Circles/>
        <Footer/>
    </>
  );
};

export default Home;
