import { useState } from "react";
import PetSelector from "../components/pet/PetSelector";
import AgeSelector from "../components/pet/AgeSelector";
import ChatContainer from "../components/chat/ChatContainer";

const Home = () => {
  const [petType, setPetType] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ================= HERO SECTION ================= */}
      <section className="px-4 pt-14 pb-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="text-5xl mb-4">🐾</div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            Pet Health Assistant
          </h1>

          {/* Tagline */}
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-xl mx-auto">
            A friendly assistant to help you understand your pet’s health,
            symptoms, and care — anytime, anywhere.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: "🩺",
              title: "Health Guidance",
              desc: "Ask about symptoms, care routines, and common concerns",
            },
            {
              icon: "🐶🐱",
              title: "Pet-Specific",
              desc: "Tailored advice for dogs and cats of all ages",
            },
            {
              icon: "⚡",
              title: "Instant Help",
              desc: "Get quick responses without waiting or appointments",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-[var(--bg-secondary)]
                rounded-2xl
                p-5
                text-center
                shadow-sm
              "
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-4 pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
            How it works
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {["Choose Pet", "Select Age", "Ask Questions"].map((step, i) => (
              <div
                key={i}
                className="
                  bg-[var(--bg-secondary)]
                  px-6 py-4
                  rounded-xl
                  text-sm
                  font-medium
                  text-[var(--text-primary)]
                "
              >
                {i + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHATBOT SECTION ================= */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl font-semibold text-[var(--text-primary)] mb-6">
            Start chatting with your pet assistant 🐕🐈
          </h2>

          <PetSelector petType={petType} setPetType={setPetType} />

          {petType && (
            <AgeSelector ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
          )}

          {petType && ageGroup && (
            <div className="mt-6">
              <ChatContainer petType={petType} ageGroup={ageGroup} />
            </div>
          )}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-sm text-[var(--text-secondary)]">
        Made with ❤️ for pet parents
      </footer>
    </div>
  );
};

export default Home;
