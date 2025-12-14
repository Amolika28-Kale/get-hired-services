import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* MIDDLEWARES */
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* STATIC FILES */
app.use("/uploads", express.static("uploads"));

/* DB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

/* ROUTES */
import registerRoute from "./routes/register.js";
app.use("/api/register", registerRoute);

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
