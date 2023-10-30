import React, { Fragment, useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import { Container,Button } from 'react-bootstrap'
import axios from "axios";
import { message } from "antd";
import '../styles/appointment.css'

const ShowAppoint = () => {
const [appointmentdata, setAppointmentdata] = useState([])
document.title= 'Your Appointment'

const [flag,setFlag]=useState(false)
    const getdata = async () => {
        const user=localStorage.getItem('userid')
        console.log("hello");
        try {
          console.log("first");
          console.log(user);
          const res = await axios.post("/api/user/getappointmentdata", { user });
          if (res.data.success) {
            console.log(res.data.appoint)
            setAppointmentdata(res.data.appoint)
            setFlag(true)
          }
          
        } catch (error) {
          // dispatch(hideLoading());
          console.log("bbye");
          console.log(error);
          message.error("something went wrong");
        }
      };
      const deleteAppoint= async (data)=>{
        try {
            console.log("first");
            console.log(data);
            const res = await axios.post("/api/user/deleteappointment", { data });
            if (res.data.success) {
                getdata()
            }
            
          } catch (error) {
            // dispatch(hideLoading());
            console.log("bbye");
            console.log(error);
            message.error("something went wrong");
          }
        
      }
useEffect(()=>{
    getdata()
},[])
if(flag===true){
    const userdata=appointmentdata
    console.log(userdata)
  return (
    <>
    <Navbar/>
    <Container>
    <div className="tablemain">
        {flag}
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor Name</th>
                        <th>Specialisation</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((data,index)=>{
                            return(
                            <>
                            <tr key={index}>
                                <td>{data.FirstName}&nbsp;{data.LastName}</td>
                                <td>{data.gender}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.doctorname}</td>
                                <td>{data.specialisation}</td>
                                <td><Button className='btn-primary' onClick={()=>{deleteAppoint(data)}}>Delete</Button></td>
                            </tr></>
                        )})
                    }
                </tbody>
            </table>
        </div>
    </Container>
    <Footer/>
    </>
  )}
}

export default ShowAppoint