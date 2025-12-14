import express from "express";
import multer from "multer";
import Registration from "../models/Registration.js";

const router = express.Router();

/* ================= multer setup ================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ================= ROUTE ================= */

router.post(
  "/",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "paymentScreenshot", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = await Registration.create({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        qualification: req.body.qualification,
        experience: req.body.experience,
        location: req.body.location,
        industry: req.body.industry,
        upiId: req.body.upiId,

        resume: req.files?.resume?.[0]?.filename,
        paymentScreenshot: req.files?.paymentScreenshot?.[0]?.filename,
      });

      res.status(201).json({ success: true, data });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

export default router;
