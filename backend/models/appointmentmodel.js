const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    
    FirstName:{
      type: String,
      required: true,
    },
    LastName:{
      type: String,
      required: true,
    },
    gender:
    {
      type: String,
      required: true,
    },
    age:
    {
      type: Number,
      required: true,
    },
    weight:
    {
      type: Number,
      required: true,
    },
    contact1:
    {
      type: Number,
      required: true,
    },
    contact2:
    {
      type: Number,
      required: true,
    },
    address:
    {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    doctorid: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    userid: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    doctorname:
    {
      type: String,
      required: true,
    },
    specialisation:{
      type: String,
      required: true,
    }
    // status: {
    //   type: String,
    //   default: "Pending",
    // }
  },
);

const appointmentModel = mongoose.model("Appointment", schema);

module.exports = appointmentModel;