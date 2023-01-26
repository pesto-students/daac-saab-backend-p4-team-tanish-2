import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  experience: {
    type: String,
  },
  specialist: {
    type: String,
  },
  degree: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Users = mongoose.model("users", userModel);
export default Users;
 
// Main DB=> Clusters 
// User naam ka ek cluster hai yeh 