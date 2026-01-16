import runPetAI from "../ai/petAi";

export const getPetAIResponse = async ({
  petType,
  ageGroup,
  userInput,
}) => {
  return await runPetAI({ petType, ageGroup, userInput });
};
