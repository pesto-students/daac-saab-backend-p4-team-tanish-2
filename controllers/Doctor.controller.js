import Doctors from "../model/doctor.model.js";

export const getDoctorByTitle = async (req, res) => {
  const { specialist } = req.params;
  try {
    const doctorSpecialist = await Doctors.find({ specialist: specialist });
    res.status(200);
    res.send(doctorSpecialist);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createDoctor = async (req, res) => {
  const newDoctor = new Doctors(req.body);
  try {
    newDoctor.save();
    res.status(200);
    res.send(newDoctor);
  } catch (error) {
    res.status(500).send(error);
  }
};
