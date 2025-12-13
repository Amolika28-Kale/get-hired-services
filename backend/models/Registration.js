import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  qualification: String,
  experience: String,
  location: String,
  industry: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Registration", registrationSchema);
