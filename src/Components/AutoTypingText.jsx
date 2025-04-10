import { useState, useEffect } from "react";

const AutoTypingText = () => {
  const texts = [
    "Discover services designed just for you!",
    "Affordable, Reliable, & Cutting-Edge Solutions!",
  ];

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 120;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentString = texts[textIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < currentString.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }

      setCurrentText(currentString.slice(0, charIndex));
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="w-full text-center">
      <p
        className="text-sm sm:text-[5px] md:text-xl lg:text-2xl font-bold text-white mx-auto whitespace-nowrap overflow-hidden  pr-2 animate-pulse transition-all duration-300"
      >
        {currentText}
      </p>
    </div>
  );
};

export default AutoTypingText;
