import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const result = await groq.chat.completions.create({
    temperature: 1,
    top_p: 1,
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are smart personal Assistant who answer the asked questions.",
      },
      {
        role: "user",
        content: "when was iphone 16 launched ?",
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "web_Search",
          description:
            "search the latest information and realtime data from the internet",
          parameters: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description: "The city and state, e.g. San Francisco, CA",
              },
              unit: {
                type: "string",
                enum: ["celsius", "fahrenheit"],
              },
            },
            required: ["query"],
          },
        },
      },
    ],
  });

  console.log(result.choices[0].message.content);
}

main();
