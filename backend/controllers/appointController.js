const appointModel=require("../models/appointmentmodel")
const userModel = require("../models/usermodel");
const nodemail=require('nodemailer')
const appointControl = async (req, res) => {
    try {
      const getuser= req.body
      console.log(getuser)
      console.log(getuser.userid)
      const appoint = new appointModel(req.body);
      await appoint.save();
      const getmail= await userModel.find({_id:getuser.userid},{email:1,_id:0})
      console.log(getmail)
      var textMail=`Your Appointment with ${getuser.doctorname} has been booked on ${getuser.date} ${getuser.time}`
      var trans=nodemail.createTransport(
        {
        service:"gmail",
        secure:"true",
        auth:
        {
        user:"thehulk03sp@gmail.com",
        pass:"tdmr ejxo uzmp wcsl"
        }
        });
        var mailOption=
        {
        from:"thehulk03sp@gmail.com",
        to:getmail[0].email,
        subject:"Appointment",
        text:textMail
        }
        trans.sendMail(mailOption,(err,info)=>
        {
        if(err)
        {
        console.log(err);
        }
        else
        {
        console.log("email send"+info.response);
        }
        });
        res.status(200).json({
          message: " Success",
          success: true,
        });
        // tdmr ejxo uzmp wcsl
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: `Appointment Add Error`, success: false, error });
    }
  };
const showAppointment=async(req,res)=>{
  try {
    const {user}= req.body
    console.log(user)
    const appoint = await appointModel.find({userid:user})
    console.log(appoint)
      res.status(200).json({
        message: " Success",
        success: true,
        appoint:appoint
      });
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Show Appointment Error`, success: false, error });
  }
}
const deleteAppointment=async(req,res)=>{
  try {
    const {data}= req.body
    console.log(data)
    const deleteappoint = await appointModel.deleteOne({userid:data.userid,date:data.date,time:data.time},{new:true})
    console.log(deleteappoint)
      res.status(200).json({
        message: " Success",
        success: true
      });
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Deletion Error`, success: false, error });
  }
}
const updateAppointment=async(req,res)=>{
  try {
    const {userid,time,date}= req.body
    console.log(data)
    const updateappoint = await appointModel.updateOne({userid:data.userid},{$set:{time:time,date:date}},{new:true})
    console.log(updateappoint)
      res.status(200).json({
        message: " Success",
        success: true,
        appoint:updateappoint
      });
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Update Error`, success: false, error });
  }
}
module.exports = { appointControl,showAppointment,deleteAppointment,updateAppointment};