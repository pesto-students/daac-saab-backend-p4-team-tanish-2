import Doctors from "../model/doctor.model.js";
import Users from "../model/user.model.js";

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

// new Users creates a new Set .
//201 = Success 
//400-500 => Error 
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


// only to get degree and specialist data
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
