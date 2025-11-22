import dotenv from "dotenv";
dotenv.config();

import { createAgent, tool } from "langchain";
import { ChatGroq } from "@langchain/groq";

import { weatherTool } from "./tools/weatherTools.js";
import { addTwoNumbers } from "./tools/addTwoNumber.js";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

const agent = createAgent({
  model,
  tools: [addTwoNumbers, weatherTool],
});

const result = await agent.invoke({
  messages: [{ role: "user", content: " tell me the weather of Mumbai" }],
});

console.log(
  "Agent Final Response:",
  result.messages[result.messages.length - 1].content
);
