import axios from "axios";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export default async function runPetAI({
  petType,
  ageGroup,
  userInput,
}) {
  const systemPrompt = `
You are a pet health assistant.
You only answer questions related to dog and cat health.
You do NOT prescribe medication or dosage.
You explain possible causes, basic care, and when to visit a veterinarian.
Use a calm, friendly, and reassuring tone.

Pet Type: ${petType}
Age Group: ${ageGroup}
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userInput },
      ],
      temperature: 0.4,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}
