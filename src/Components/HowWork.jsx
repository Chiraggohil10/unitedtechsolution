import React, { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Consultation & Understanding",
    description: "We Listen to You",
    points: [
      "Understand your vision, goals, and challenges.",
      "Assess current systems and processes thoroughly.",
      "Provide expert advice tailored to your business needs.",
    ],
  },
  {
    id: 2,
    title: "Custom Solutions & Planning",
    description: "Tailored solutions for long-term success.",
    points: [
      "Create tailored solutions for your goals.",
      "Leverage tech for scalable, innovative systems.",
      "Ensure a seamless roadmap for implementation.",
    ],
  },
  {
    id: 3,
    title: "Implementation & Execution",
    description: "Seamless execution of strategic plans.",
    points: [
      "Deploy solutions with precision and minimal disruption.",
      "Provide comprehensive training and onboarding.",
      "Ensure high-quality standards and on-time delivery.",
    ],
  },
  {
    id: 4,
    title: "Support & Optimization",
    description: "Continuous improvement and maintenance.",
    points: [
      "Provide ongoing maintenance for optimal performance.",
      "Optimize solutions for evolving needs.",
      "Provide 24/7 assistance and proactive problem-solving.",
    ],
  },
  {
    id: 5,
    title: "Evaluation & Growth",
    description: "Sustain success with continuous improvement.",
    points: [
      "Regular performance assessment and feedback.",
      "Adapt to business needs with data insights.",
      "Scale and innovate for long-term success.",
    ],
  },
  {
    id: 6,
    title: "Long-Term Partnership",
    description: "Your trusted partner in growth.",
    points: [
      "Focus on building trust and delivering results.",
      "Collaborate for future growth with scalable technologies.",
      "Become your technology partner for ongoing innovation.",
    ],
  },
];

const SelectActionCard = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className="mx-3 lg:mx-20 my-15">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        How <span className="text-blue-600">We Work ?</span>
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          const isSelected = selectedCard === index;

          return (
            <div
              key={card.id}
              onClick={() => setSelectedCard(index)}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl ${
                isSelected
                  ? "border-blue-600 bg-blue-50 scale-[1.01]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="lg:p-5 p-3">
                <h2 className="lg:text-lg text-sm font-bold text-blue-600 uppercase tracking-wide text-center">
                  {card.title}
                </h2>

                <p className="text-gray-600 text-sm text-center mt-1 mb-4 font-medium">
                  {card.description}
                </p>

                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectActionCard;
