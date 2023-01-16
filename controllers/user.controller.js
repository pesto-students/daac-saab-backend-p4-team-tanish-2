import Doctors from "../model/doctor.model.js";
import Users from "../model/user.model.js";
import New_doc from "../model/NewDoctor.model.js";
import Prescription from "../model/prescription.model.js";

export const getSymptoms = async (req, res) => {
  const { symptom } = req.params;
  try {
    const data = await Prescription.find({
      symptom: symptom,
    });
    res.json(data);
    res.status(201);
  } catch (err) {
    res.sendStatus(404);
  }
};
export const createSymptom = async (res, req) => {
  const prescription = new Prescription(req.body);
  try {
    prescription.save();
    res.json(201);
  } catch (err) {
    res.status(500);
  }
};

export const createEmployee = async (req, res) => {
  const newDoctor = new Users(req.body);
  try {
    newDoctor.save();
    res.status(201);
    res.json(newDoctor);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};
export const new_doc = async (req, res) => {
  const req_doc = new New_doc(req.body);
  try {
    req_doc.save();
    res.status(200);
    res.json(new_doc);
  } catch (err) {
    res.status(404);
    res.json({ message: err.message });
  }
};
export const getDoctor = async (req, res) => {
  try {
    const doctor = await Users.find().limit(35);
    res.status(200);
    res.json(doctor);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};
export const getDoctorDetail = async (req, res) => {
  try {
    const doctorDetail = await Users.find().limit(35);
    res.status(200);
    res.json(doctorDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Mongo DB Function => findById
export const getDoctorDetailById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctors.findById(id);
    res.status(200);
    res.json(doctor);
  } catch {
    res.status(404), res.json({ message: err.message });
  }
};
