const express=require('express')
const morgan=require('morgan')
const dotenv=require("dotenv")
const cors=require("cors")
const connectDB =require('./config/db')
const { loginControl, registerControl, homeControl,userControl } = require('./controllers/userController')
const homeAuth = require('./middlewares/homeAuth')
const { doctorControl, doctordetailControl } = require('./controllers/doctorController')
const { appointControl, showAppointment, deleteAppointment, updateAppointment } = require('./controllers/appointController')
const app=express()
const corsOptions = {
    origin: 'https://doctor-appointment-five-gamma.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
  app.use(cors(corsOptions));
//port
const port= process.env.PORT || 5000
//config dotenv
dotenv.config()
// MongoDb
connectDB()
app.use(express.json())
app.use(morgan('dev'))



// app.use('https://doctor-appointment-five-gamma.vercel.app/api/user',require('./routing/userrouting'))
app.get('/',(req,res)=>{
    res.send("Success")
})

app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/login',loginControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/register',registerControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/getUserData',homeAuth,homeControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/getdoctordata',doctorControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/setData',appointControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/doctordetail',doctordetailControl)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/getappointmentdata',showAppointment)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/deleteappointment',deleteAppointment)
app.post('https://doctor-appointment-five-gamma.vercel.app/api/user/updateappointment',updateAppointment)
//listening port
app.listen(port,()=>
{
    console.log(`Server running ${process.env.NODE_MODE} on ${process.env.PORT}`)
})
