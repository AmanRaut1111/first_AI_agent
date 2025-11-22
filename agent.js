import dotenv from "dotenv";
dotenv.config();

import { createAgent, tool } from "langchain";
import { ChatGroq } from "@langchain/groq";

import { weatherTool } from "./tools/weatherTools.js";
import { addTwoNumbers } from "./tools/addTwoNumber.js";
import { employeeInfoTool } from "./tools/employeeetails.js";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

const agent = createAgent({
  model,
  tools: [addTwoNumbers, weatherTool, employeeInfoTool],
  response_format: { type: "json_object" },
});

export async function runEmployeeAgent(query) {
  const systemMessage = `
RULES:
- Your answer MUST be a single plain sentence or paragraph.
- NO bullet points.
- NO numbering (like 1. 2. 3.).
- NO markdown (*, -, #).
- NO new lines for lists.
- If multiple employees exist, separate them with commas.

`;

  if (typeof query !== "string") {
    throw new Error("Query must be a string");
  }
  const response = await agent.invoke({
    messages: [
      { role: "system", content: systemMessage },
      { role: "user", content: query },
    ],
  });

  // Return the final answer
  return response.messages[response.messages.length - 1].content;
}
