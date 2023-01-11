import express from "express";
import {
  createEmployee,
  userPayment,
  getDoctor,
  getDoctorDetail,
  getDoctorDetailById,
} from "../controllers/user.controller.js";
import {
  getDoctorByTitle,
  createDoctor,
} from "../controllers/Doctor.controller.js";

const router = express.Router();

router.post("/createEmployee", createEmployee);
router.post("/payment", userPayment);
router.get("/getDoctor", getDoctor);
router.get("/getDoctorDetail", getDoctorDetail);
router.get("/doctor/:id", getDoctorDetailById);
router.get("/doctorSpecialist/:specialist", getDoctorByTitle);
router.post("/createDoc", createDoctor);

export default router;
