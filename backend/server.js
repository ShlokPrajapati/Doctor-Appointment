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
dotenv.config()
const corsOptions = {
    origin: 'https://doctor-appointment-five-gamma.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
//port
const port= process.env.PORT || 5000
//config dotenv
// MongoDb
connectDB()
app.use(express.json())
app.use(morgan('dev'))



// app.use('api/user',require('./routing/userrouting'))
app.get('/',(req,res)=>{
    res.send("Success")
})

app.post('/api/user/login',loginControl)
app.post('/api/user/register',registerControl)
app.post('/api/user/getUserData',homeAuth,homeControl)
app.post('/api/user/getdoctordata',doctorControl)
app.post('/api/user/setData',appointControl)
app.post('/api/user/doctordetail',doctordetailControl)
app.post('/api/user/getappointmentdata',showAppointment)
app.post('/api/user/deleteappointment',deleteAppointment)
app.post('/api/user/updateappointment',updateAppointment)
//listening port
app.listen(port,()=>
{
    console.log(`Server running ${process.env.NODE_MODE} on ${process.env.PORT}`)
})
