import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react"; // Optional: Install lucide-react or use another icon lib

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
    <div className="mx-3 lg:mx-20 my-16">
       <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold leading-tight mb-6 drop-shadow-lg">
          How <span className="text-blue-600">We Work ?</span>
        </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          const isSelected = selectedCard === index;

          return (
            <div
              key={card.id}
              onClick={() => setSelectedCard(index)}
              className={`relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl p-6 rounded-3xl cursor-pointer bg-white shadow-md ${
                isSelected
                  ? "border-2 border-blue-500 ring-2 ring-blue-100"
                  : "border-2 border-gray-200"
              }`}
            >
              {/* Optional top accent */}
              <div
                className={`h-1 w-full rounded-full mb-4 ${
                  isSelected ? "bg-gradient-to-r from-blue-500 to-indigo-500" : "bg-gray-200"
                }`}
              />

              <h2 className="text-xl font-semibold text-blue-700 text-center mb-1">
                {card.title}
              </h2>
              <p className="text-center text-gray-500 text-[12px] lg:text-lg mb-4 font-medium">
                {card.description}
              </p>

              <ul className="space-y-3 text-gray-700 text-xs lg:text-sm">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-500 w-5 h-5 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectActionCard;
