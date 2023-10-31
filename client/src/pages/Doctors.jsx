import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import Empty from "../components/Empty";
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  document.title= 'Doctors'

  const getDoctorData = async (values) => {
    try {
      const res = await axios.post(
        "https://doctorappointmentbackend-9mx3.onrender.com/api/user/getdoctordata",
        values
      );
      if (res.data.success) {
        console.log(res.data.doctor);
        setDoctors(res.data.doctor);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorData()
  }, []);

  return (
    <>
    <Navbar/>
     
       (
        <section className="container doctors">
          <h2 className="page-heading">Our Doctors</h2>
          {doctors.length > 0 ? (
            <div className="doctors-card-container">
              {doctors.map((ele) => {
                return (
                  <DoctorCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )
      <Footer />
    </>
  );
};

export default Doctors;