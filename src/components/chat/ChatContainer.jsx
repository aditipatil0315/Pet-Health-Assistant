import { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { getMockResponse } from "../../services/mockResponses";
import Alert from "../ui/Alert";
import { getPetAIResponse } from "../../services/chatService";

const handleSend = async (input) => {
  setMessages((prev) => [...prev, { sender: "user", text: input }]);

  setLoading(true);

  const reply = await getPetAIResponse({
    petType,
    ageGroup,
    userInput: input,
  });

  setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
  setLoading(false);
};


const ChatContainer = ({ petType, ageGroup }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi! Ask me anything about your ${ageGroup.toLowerCase()} ${petType}'s health 🐾`,
    },
  ]);

  const [alert, setAlert] = useState(null);

  const handleSend = (input) => {
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    if (
      input.toLowerCase().includes("seizure") ||
      input.toLowerCase().includes("bleeding")
    ) {
      setAlert("🚨 Emergency detected. Please visit a veterinarian immediately.");
    } else {
      setAlert(null);
    }

    const reply = getMockResponse(input, petType, ageGroup);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div className="
      w-full 
      max-w-3xl 
      mx-auto
      bg-[var(--bg-primary)]
      rounded-3xl 
      p-4 sm:p-6
      shadow-lg
      flex 
      flex-col
      h-[75vh] sm:h-[80vh]
    ">
      {alert && <Alert message={alert} />}

      <div className="flex-1 overflow-y-auto mb-3">
        <ChatMessages messages={messages} />
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
};


export default ChatContainer;
