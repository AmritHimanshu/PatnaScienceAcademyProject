import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/userRoutes.js";
import cors from "cors";
//import nodemailer from "nodemailer"
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/user", UserRouter);
mongoose
  .connect(
    "mongodb+srv://khushisingh5716:khushi5716@cluster0.ak1puzd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(2003);
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));
