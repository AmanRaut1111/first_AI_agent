import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/GenAI_Agent")
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(err);
  }
};
