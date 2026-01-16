export const getMockResponse = (input, petType) => {
  const text = input.toLowerCase();

  if (text.includes("vomit") || text.includes("vomiting")) {
    return `Vomiting in ${petType}s can happen due to food issues, infections, or stress. 
If it continues or your pet seems weak, please consult a veterinarian.`;
  }

  if (text.includes("not eating")) {
    return `Loss of appetite in ${petType}s can be concerning.
If this lasts more than 24–48 hours, a vet visit is strongly recommended.`;
  }

  if (!text.includes("dog") && !text.includes("cat")) {
    return "I currently specialize in dog and cat health questions 🐾";
  }

  return `I can help with common ${petType} health questions.
Could you provide more details about the symptoms?`;
};
