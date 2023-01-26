import mongoose from "mongoose";

const doctorModel = new mongoose.Schema({
  name: {
    type: String,
  },
  specialist: {
    type: String,
  },
  degree : {
    type: String,
  },
  experience: {
    type: String,
  },
  Image: {
    type: String,
  },
});

const Doctors = mongoose.model("doctors", doctorModel);
export default Doctors;
