import { tool } from "langchain";
import * as z from "zod";

// export const weatherTool = tool(
//   ({ city }) => `Weather of ${city}: Always sunny 😎`,
//   {
//     name: "get_weather",
//     description: "Get weather for a city",
//     schema: z.object({
//       city: z.string(),
//     }),
//   }
// );

export const weatherTool = tool(
  async ({ city }) => {
    try {
      const url = `https://wttr.in/${city}?format=j1`;
      const jsonData = await fetch(url);
      const result = await jsonData.json();

      const weatherDesc = result.current_condition[0].weatherDesc[0].value;
      const tempC = result.current_condition[0].temp_C;
    } catch (error) {
      return `Could not fetch weather data for ${city}.`;
    }
  },
  {
    name: "get_weather",
    description: "Get weather for a city",
    schema: z.object({
      city: z.string(),
    }),
  }
);
