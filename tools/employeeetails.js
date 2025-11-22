import { tool } from "langchain";
import * as z from "zod";
import Employee from "../employe.js"; // your model

export const employeeInfoTool = tool(
  async ({ filter }) => {
    try {
      const parsedFilter = JSON.parse(filter);

      const employees = await Employee.find(parsedFilter);

      if (employees.length === 0) {
        return "No employees found.";
      }

      return JSON.stringify(employees, null, 2);
    } catch (err) {
      return "Error querying employees: " + err.message;
    }
  },
  {
    name: "get_employee_info",
    description:
      'Search employees using a MongoDB filter. Input should be a JSON string like {"name":"Aman"} or {"department":"IT"}.',
    schema: z.object({
      filter: z.string(),
    }),
  }
);
