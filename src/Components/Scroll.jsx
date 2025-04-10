import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
