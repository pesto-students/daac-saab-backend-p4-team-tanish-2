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
});
const Prescription = mongoose.model("pres", prescription);
export default Prescription;
