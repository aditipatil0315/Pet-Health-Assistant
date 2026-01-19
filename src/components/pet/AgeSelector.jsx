const AgeSelector = ({ ageGroup, setAgeGroup }) => {
  const ages = ["Puppy/Kitten", "Adult", "Senior"];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
      {ages.map((age) => (
        <button
          key={age}
          onClick={() => setAgeGroup(age)}
          className={`
            px-4 py-2
            rounded-full
            text-sm sm:text-base
            border
            transition-all
            ${
              ageGroup === age
                ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white shadow-md"
                : "bg-[var(--bg-secondary)] border-[var(--border-light)] text-[var(--text-primary)] hover:bg-[var(--accent-secondary)] hover:text-white"
            }
          `}
        >
          {age}
        </button>
      ))}
    </div>
  );
};

export default AgeSelector;
