import mongoose from "mongoose";

const new_doctor = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
});
const New_doc = mongoose.model("new_doc", new_doctor);
export default New_doc;
