import express from "express";
import {
  createEmployee,
  userPayment,
  getDoctor,
  getDoctorDetail,
  getDoctorDetailById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/createEmployee", createEmployee);
router.post("/payment", userPayment);
router.get("/getDoctor", getDoctor);
router.get("/getDoctorDetail", getDoctorDetail);
router.get("/doctor/:id", getDoctorDetailById);

export default router;
