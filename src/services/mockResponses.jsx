export const getMockResponse = (input, petType, ageGroup) => {
  const text = input.toLowerCase();

  if (text.includes("seizure") || text.includes("bleeding")) {
    return "🚨 This may be an emergency. Please contact a veterinarian immediately.";
  }

  if (text.includes("vomit")) {
    return `Vomiting in a ${ageGroup.toLowerCase()} ${petType} can occur due to diet changes, infections, or stress.
If it continues or is severe, please consult a vet.`;
  }

  if (text.includes("not eating")) {
    return `Loss of appetite in ${ageGroup.toLowerCase()} ${petType}s is concerning.
If this lasts more than 24 hours, a veterinary visit is recommended.`;
  }

  return `I can help with common ${petType} health concerns.
Can you tell me since when the symptoms started?`;
};
