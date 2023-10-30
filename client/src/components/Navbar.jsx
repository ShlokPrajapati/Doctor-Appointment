import React, { useState,useEffect } from "react";
import "./navbar.css";
import {
  Link
} from "react-router-dom";

import logo from "../images/healthIcon.png";

import axios from "axios";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  const [data, setData] = useState({});
  const getUserData = async (values) => {
    try {
      const res = await axios.post(
        "/api/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        values
      );
      if (res.data.success) {
        console.log(res.data.data);
        setData(res.data.data);
        localStorage.setItem("userid",res.data.data.id)

      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  const logOut = () => {
    localStorage.clear();
    setData({});
    window.location.reload();
  };
  return (
    <>
      <div>
          <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa-solid fa-bars"></i>
          </label>
            <label className="logo">
                <Link to='/'>
                  <img src={logo} alt="image"></img>
                </Link>
              </label>
            <ul>
              
              <li>
                <Link to="/" className="remove">
                  Home
                </Link>
              </li>
              { localStorage.getItem('token') &&
              <li>
                <Link to='/showappointment'>Show Appointments</Link>
              </li>}
              <li>
                <Link to="/doctors" className="remove">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="remove">
                  Blog
                </Link>
              </li>
              <li>
                {localStorage.getItem("swapIcons") ? (
                  <div className="button-btn" onClick={toggle}>
                    <i className="fa-regular fa-user" ></i>
                  </div>
                ) : (
                  <Link to="/login" className="button">
                    Signin
                  </Link>
                )}
              </li>
            </ul>
            {localStorage.getItem("swapIcons") && (
              <ul className={`menu-nav ${isopen ? " show-menu" : ""}`}>
                <div className="items">
                  <hr/>
                  <p>Email: {data.email}</p> 
                  <Link to="/" onClick={logOut}>
                    <p>
                      Logout <i className="fa-solid fa-right-from-bracket"></i>
                    </p>
                  </Link>
                </div>
              </ul>
            )}
          </nav>
          
      </div>
    </>
  );
}
