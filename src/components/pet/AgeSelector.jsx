const AgeSelector = ({ ageGroup, setAgeGroup }) => {
  const ages = ["Puppy/Kitten", "Adult", "Senior"];

  return (
    <div className="flex justify-center gap-3 mb-6">
      {ages.map((age) => (
        <button
          key={age}
          onClick={() => setAgeGroup(age)}
          className={`px-4 py-2 rounded-lg text-sm transition border
            ${
              ageGroup === age
                ? "bg-green-600 border-green-600"
                : "border-neutral-700 hover:bg-neutral-800"
            }`}
        >
          {age}
        </button>
      ))}
    </div>
  );
};

export default AgeSelector;
