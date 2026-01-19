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
    <form
      onSubmit={handleSubmit}
      className="
        flex gap-2 items-center
        bg-[var(--bg-secondary)]
        p-2 rounded-2xl
      "
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe symptoms or ask a question..."
        className="
          flex-1
          bg-transparent
          px-4 py-3
          text-[var(--text-primary)]
          placeholder-[var(--text-secondary)]
          outline-none
          text-sm sm:text-base
        "
      />

      <button
        type="submit"
        className="
          bg-[var(--accent-primary)]
          text-white
          px-4 sm:px-6
          py-2.5
          rounded-xl
          font-medium
          hover:bg-[var(--accent-secondary)]
          transition-colors
          text-sm sm:text-base
        "
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
