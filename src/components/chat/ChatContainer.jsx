import { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { getMockResponse } from "../../services/mockResponses";
import Alert from "../ui/Alert";

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

    // Emergency check
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
    <div className="bg-neutral-900 rounded-2xl p-4">
      {alert && <Alert message={alert} />}

      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
