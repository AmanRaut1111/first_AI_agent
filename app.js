import express from "express";
import { connectDB } from "./config/db.js";
import employeeRouter from "./employeeRouter.js";

const app = express();
connectDB();

app.use(express.json());

app.use("/", employeeRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log(" server is listening on port 3000");
});
