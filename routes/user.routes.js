import express from "express";
import {
  createEmployee,
  getDoctor,
  getDoctorDetail,
  getDoctorDetailById,
  new_doc,
} from "../controllers/user.controller.js";
import {
  getDoctorByTitle,
  createDoctor,
  getSpecialistById,
} from "../controllers/Doctor.controller.js";

const router = express.Router();

router.post("/createEmployee", createEmployee);
router.get("/getDoctor", getDoctor);
router.get("/getDoctorDetail", getDoctorDetail);
router.get("/doctorByDetail/:id", getDoctorDetailById);
router.get("/doctorSpecialist/:specialist", getDoctorByTitle);
router.post("/createDoc", createDoctor);
router.get("/docById/:id", getSpecialistById);
router.post("/request", new_doc);

export default router;
