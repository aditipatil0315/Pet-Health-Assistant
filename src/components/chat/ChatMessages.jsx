const ChatMessages = ({ messages }) => {
  return (
    <div className="h-100 overflow-y-auto mb-4 space-y-3">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-[80%] px-4 py-2 rounded-xl text-sm
            ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600"
                : "bg-neutral-800"
            }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
