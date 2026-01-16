import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe symptoms or ask a question..."
        className="flex-1 bg-neutral-800 rounded-xl px-4 py-3 outline-none"
      />
      <button className="bg-blue-600 px-5 rounded-xl">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
