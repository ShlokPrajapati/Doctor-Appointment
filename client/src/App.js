import React from "react";
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Appointment from "./components/Appointment";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import ShowAppoint from "./components/ShowAppoint";
function App() {
  
  return (
   <>
  <BrowserRouter>
  <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/doctors" element={<Doctors/>} />
              <Route path="/register" element={<Register />} />
              <Route path='/appointment/:id' element={<Appointment />}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/showappointment' element={<ShowAppoint/>}/>

              
  </Routes>

  </BrowserRouter>

   </>
  );
}

export default App;
