import { Calendar } from "react-calendar";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import '../styles/form.css'
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { message } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Appointment = (props) => {
  var currentdate = new Date();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [doctordetail, setdoctordetail] = useState({});
  var mindate = new Date();
  mindate.setDate(currentdate.getDate() + 1);
  var maxdate = new Date();
  maxdate.setDate(currentdate.getDate() + 30);
  const param = useParams();
  const id = {
    id: param.id,
  };
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  const datevalue = async (e) => {
    const date = e;
    console.log(date);
    setUser({ ...user, date: date.toLocaleDateString(),doctorname: doctordetail.name,
        specialisation: doctordetail.specialisation,doctorid: param.id, userid: localStorage.getItem("userid") });
  };
  const doctorDetail = async (id) => {
    try {
      console.log(id);
      const res = await axios.post("https://doctorappointmentbackend-9mx3.onrender.com/api/user/doctordetail", id);
      if (res.data.success) {
        console.log(res.data.doctor);
        setdoctordetail(res.data.doctor)
        console.log(user)
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  const submitData = async (event) => {
    event.preventDefault()
    console.log("hello");
    try {
      console.log("first");
      console.log(user);
      const res = await axios.post("https://doctorappointmentbackend-9mx3.onrender.com/api/user/setData", user);
      if (res.data.success) {
        message.success("Success");
        navigate('/doctors')
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      console.log("bbye");
      console.log(error);
      message.error("something went wrong");
    }
  };
  useEffect(() => {
    doctorDetail(id)
  }, []);
  document.title= 'Appointment'
  return (
    <Fragment>
      <Navbar/>
      <div className="form">
      <Container>
      <h3 className="appoint-form" >Appointment Form</h3>
      </Container>
      <Container>
        <Form
          onSubmit={submitData}
        >
          <Row className="rows">
            <Col md={6}>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                name="FirstName"
                onChange={handleInput}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                name="LastName"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="rows">
            <Col md={2}>
              <Form.Label>Gender:</Form.Label>
            </Col>
            <Col md={2}>
              <Form.Check
                type="radio"
                label="male"
                name="gender"
                value="male"
                id="formHorizontalRadios1"
                onChange={handleInput}
              />
            </Col>
            <Col md={2}>
              <Form.Check
                type="radio"
                label="female"
                name="gender"
                value="female"
                id="formHorizontalRadios1"
                onChange={handleInput}
              />
            </Col>
            <Col md={2}>
              <Form.Check
                type="radio"
                label="others"
                name="gender"
                value="others"
                id="formHorizontalRadios1"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="rows">
            <Col md={6}>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Age"
                name="age"
                onChange={handleInput}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Weight:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Weight"
                name="weight"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="rows">
            <Col md={6}>
              <Form.Label>Contact 1:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Contact No. 1"
                name="contact1"
                onChange={handleInput}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Contact 2:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Contact No. 2"
                name="contact2"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="rows">
            <Col md={6}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="textarea"
                placeholder="Write your address"
                name="address"
                onChange={handleInput}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Time:</Form.Label>
              <Form.Control
                required
                type="time"
                name="time"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="rows">
            <Col md={6}>
              <Form.Label>Calendar:</Form.Label>
              <Calendar
                name="date"
                className="hov"
                required
                minDate={mindate}
                maxDate={maxdate}
                onChange={datevalue}
              />
            </Col>
            <Col md={6}>
              <Form.Label >DoctorName:</Form.Label>
              <div className="rows">{doctordetail.name}</div>
              <Form.Label >Specialisation:</Form.Label>
              <div>{doctordetail.specialisation}</div>
            </Col>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container></div>
      <Footer/>
    </Fragment>
  );
};

export default Appointment;
