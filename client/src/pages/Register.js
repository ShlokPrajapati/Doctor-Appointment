import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Register = () => {
  const navigate = useNavigate();
  document.title= 'SignUp'
  const [password, setPassword] = useState('')
  const onFinish = async (values) => {
    const regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[^\s"'<>]{8,}$/;
          console.log(regex.test(password));
    try {
      
      if(regex.test(password)){
      const res = await axios.post("/api/user/register", values);
 
      if (res.data.success) {
        message.success("Success");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }}
      else{
        message.warning('Not Strong Password')
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
          <span className="heading">Register</span>
          <div className="form-group">
            <Form.Item name="name">
              <Input type="text" required className="form-control" placeholder="Username"/>
            </Form.Item>
          </div>

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
              onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
            </Form.Item>
          </div>
          <div className="form-group">
            <Link to="/login">
              <span className="text">Already User?</span>
            </Link>
            <button type="submit" className="btn btn-default">
              Register
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
