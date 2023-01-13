import Doctors from "../model/doctor.model.js";
import Users from "../model/user.model.js";
import New_doc from "../model/NewDoctor.model.js";

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
    const doctorDetail = await Users.find(
      {},
      { degree: 1, specialist: 1 }
    ).limit(35);
    res.status(200);
    res.json(doctorDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};
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
