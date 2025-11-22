import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  hireDate: {
    type: Date,
    default: new Date(),
  },
  city: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
