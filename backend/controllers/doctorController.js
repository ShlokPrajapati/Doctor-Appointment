const doctorModel=require("../models/doctormodel")
const doctorControl = async (req, res) => {
    try {
      const doctor = await doctorModel.find();
      
        res.status(200).json({
          message: "Success",
          success: true,
          doctor:doctor,
        });
      
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: `Error`, success: false, error });
    }
  };
const doctordetailControl=async(req,res)=>{
  const {id}=req.body
  console.log(id)
  try {
    const doctor=await doctorModel.findById(id)
    console.log(doctor)
    res.status(200).json({
      message: "Success",
      success: true,
      doctor:doctor,
    });
  } catch (error) {
    console.log(error);
      res
        .status(500)
        .send({ message: `Error`, success: false, error });
  }
} 
module.exports = { doctorControl,doctordetailControl};
