import { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { getMockResponse } from "../../services/mockResponses";

const ChatContainer = ({ petType }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi! Ask me anything about your ${petType}'s health 🐾`,
    },
  ]);

  const handleSend = (input) => {
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const reply = getMockResponse(input, petType);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div className="bg-neutral-900 rounded-2xl p-4">
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
