import mongoose from "mongoose";

const userModel = new mongoose.Schema({});

const Users = mongoose.model("User", userModel);
export default Users;
