import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import doctorRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const username = encodeURIComponent("bhushanHr26");
const password = encodeURIComponent("7739625372@Bhu");
const RAZORPAY_SECRET = "Usv0aTb9sIXdPFjfYgJpmvtQ";
const RAZORPAY_KEY_ID = "rzp_test_Y9YH8F8lRERGsD";
const DB = `mongodb+srv://${username}:${password}@cluster0.mi18rii.mongodb.net/daac_saab?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5001;
app.use("/", doctorRoutes);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT, () => console.log(`DB Connected on port : ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/", (req, res) => {
  res.send(`Hello world From Index.js file from Server ${PORT}`);
});
