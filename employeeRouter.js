import express from "express";
import { runEmployeeAgent } from "./agent.js"; // or correct path

const employeeRouter = express.Router();

employeeRouter.post("/ask", async (req, res) => {
  try {
    const { query } = req.body;

    // Validate query
    if (!query || typeof query !== "string") {
      return res.status(400).json({
        error: "query must be a string in body",
      });
    }

    const response = await runEmployeeAgent(query);

    res.json({ message: response, status: true, statusCode: 200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default employeeRouter;
