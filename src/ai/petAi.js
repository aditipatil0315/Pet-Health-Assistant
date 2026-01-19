import axios from "axios";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export default async function runPetAI({
  petType,
  ageGroup,
  userInput,
}) {
  const prompt = `
You are a pet health assistant.
You only answer questions related to dog and cat health.
You do NOT prescribe medication or dosage.
You explain possible causes, basic care, and when to visit a veterinarian.
Use a calm, friendly, and reassuring tone.

Pet Type: ${petType}
Age Group: ${ageGroup}

User Question:
${userInput}
`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}
