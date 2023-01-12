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
export const getDoctor = async (req, res) => {
  try {
    const doctor = await Users
    .find()
    .limit(35);
    res.status(200);
    res.json(doctor);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};
export const userPayment = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 50000, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
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
