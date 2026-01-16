import { useState } from "react";
import PetSelector from "../components/pet/PetSelector";
import AgeSelector from "../components/pet/AgeSelector";
import ChatContainer from "../components/chat/ChatContainer";

const Home = () => {
  const [petType, setPetType] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2">
        Pet Health Assistant 🐾
      </h1>

      <PetSelector petType={petType} setPetType={setPetType} />

      {petType && (
        <AgeSelector ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      )}

      {petType && ageGroup && (
        <ChatContainer petType={petType} ageGroup={ageGroup} />
      )}
    </div>
  );
};

export default Home;
