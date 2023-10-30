const express= require('express')
const { loginControl, registerControl, homeControl,userControl } = require('../controllers/userController')
const homeAuth = require('../middlewares/homeAuth')
const { doctorControl, doctordetailControl } = require('../controllers/doctorController')
const { appointControl, showAppointment, deleteAppointment, updateAppointment } = require('../controllers/appointController')


//router object
const router=express.Router()

//routes
router.post('/login',loginControl)
router.post('/register',registerControl)
router.post('/getUserData',homeAuth,homeControl)
router.post('/getdoctordata',doctorControl)
router.post('/setData',appointControl)
router.post('/doctordetail',doctordetailControl)
router.post('/getappointmentdata',showAppointment)
router.post('/deleteappointment',deleteAppointment)
router.post('/updateappointment',updateAppointment)
module.exports= router