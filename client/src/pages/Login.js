import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import "../";

import { Form, Input, message, Button } from "antd";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Login = () => {
  const navigate = useNavigate();
  
  document.title= 'Login'
 
  const onFinish = async (values) => {
    try {
      
      const res = await axios.post("/api/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("swapIcons", true);
        message.success("Success");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <Navbar />
     
      
        <div className="form-container">
          <Form className="form-horizontal" onFinish={onFinish}>
            <span className="heading">Log In</span>
           
            <div className="form-group">
              <Form.Item name="email">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </Form.Item>
            </div>
            <div className="form-group help">
              <Form.Item name="password">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </Form.Item>
            </div>
            <div className="form-group">
              <Link to="/register">
                <span className="text">New User?</span>
              </Link>
              <button type="submit" className="btn btn-default">
                Log in
              </button>
            </div>
          </Form>
        </div>
      
      <Footer />
    </>
  );
};

export default Login;
