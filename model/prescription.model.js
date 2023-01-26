import mongoose from "mongoose";

const prescription = new mongoose.Schema({
  symptom: {
    type: String,
  },
  advice: {
    type: Array,
  },
  health: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const Prescription = mongoose.model("pres", prescription);
export default Prescription;
