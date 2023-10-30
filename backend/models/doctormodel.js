const mongoose=require('mongoose')
const DoctorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    specialisation: {
      type: String,
      required: true,
    },
    experience: {
        type: Number,
        required: true,
      },
    fees: {
        type: Number,
        required: true,
      },
  });
mongoose.pluralize(null)
const doctorModel = mongoose.model("doctor", DoctorSchema);
//   Doctor.createIndexes();
module.exports = doctorModel
