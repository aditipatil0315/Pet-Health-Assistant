import { useState } from "react";
import PetSelector from "../components/pet/PetSelector";
import ChatContainer from "../components/chat/ChatContainer";

const Home = () => {
  const [petType, setPetType] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2">
        Pet Health Assistant 🐾
      </h1>
      <p className="text-center text-neutral-400 mb-8">
        Ask health-related questions about your dog or cat
      </p>

      <PetSelector petType={petType} setPetType={setPetType} />

      {petType && <ChatContainer petType={petType} />}
    </div>
  );
};

export default Home;
