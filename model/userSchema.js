import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  address: String,
  password:Number,
});

const user = mongoose.model("user", userSchema);

export default user;
