const PetSelector = ({ petType, setPetType }) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-4 mb-8">
      {["dog", "cat"].map((pet) => (
        <button
          key={pet}
          onClick={() => setPetType(pet)}
          className={`
            px-5 sm:px-6
            py-3
            rounded-2xl
            border
            text-base sm:text-lg
            font-medium
            capitalize
            transition-all
            flex items-center gap-2
            ${
              petType === pet
                ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white shadow-lg scale-[1.03]"
                : "bg-[var(--bg-secondary)] border-[var(--border-light)] text-[var(--text-primary)] hover:bg-[var(--accent-secondary)] hover:text-white"
            }
          `}
        >
          {pet === "dog" ? "🐶 Dog" : "🐱 Cat"}
        </button>
      ))}
    </div>
  );
};

export default PetSelector;
