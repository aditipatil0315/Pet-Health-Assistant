const PetSelector = ({ petType, setPetType }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {["dog", "cat"].map((pet) => (
        <button
          key={pet}
          onClick={() => setPetType(pet)}
          className={`px-6 py-3 rounded-xl border text-lg capitalize transition
            ${
              petType === pet
                ? "bg-blue-600 border-blue-600"
                : "border-neutral-700 hover:bg-neutral-800"
            }`}
        >
          {pet === "dog" ? "🐶 Dog" : "🐱 Cat"}
        </button>
      ))}
    </div>
  );
};

export default PetSelector;
