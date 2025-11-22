import { tool } from "langchain";
import * as z from "zod";

export const addTwoNumbers = tool(({ a, b }) => a + b, {
  name: "add_two_numbers",
  description: "Adds two numbers and returns the result.",
  schema: z.object({
    a: z.number(),
    b: z.number(),
  }),
});
