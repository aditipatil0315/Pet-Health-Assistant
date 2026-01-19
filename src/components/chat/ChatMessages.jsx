const ChatMessages = ({ messages }) => {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto pr-1">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`
            max-w-[85%] sm:max-w-[75%]
            px-4 py-2.5
            text-sm sm:text-base
            leading-relaxed
            rounded-2xl
            ${
              msg.sender === "user"
                ? "ml-auto bg-[var(--accent-primary)] text-white rounded-br-md"
                : "bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-bl-md"
            }
          `}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
