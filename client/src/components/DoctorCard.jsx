import "../styles/doctorcard.css";
import React, { useState } from "react";
// import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";
import { message  } from "antd";
import { Link, useNavigate } from "react-router-dom";

const DoctorCard = (props ) => {
  var img_src='https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000'
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [bookcheck,setBookcheck]=useState(false)
  const navigate=useNavigate()

const handleModal=()=>{
  if(token==""){
    return message.warning('You must log in first')
  }
  else{
    setBookcheck(true)
  }
}

  return (
    <div className={`card`}>
      <div className='card-img'>
              <img src={img_src} alt='No img'></img>
            </div>
      <h3 className="card-name">
         {props.ele.name}
      </h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {props.ele.specialisation}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {props.ele.experience} years
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong> ₹ {props.ele.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {props.ele.contact}
      </p>
      <button
        className="btn appointment-btn"
        onClick={()=>{handleModal()}}
      >{bookcheck?
        <Link to={`/appointment/${props.ele._id}`} ele={props.ele}>Book</Link>:<div>Book</div>}
      </button>
    </div>
  );
};

export default DoctorCard;