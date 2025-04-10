import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logoo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = (id) => {
    closeMobileMenu(); 
    if (id === "home" && location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
  
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="py-0 sm:py-2 shadow-md bg-white fixed w-full top-0  left-0 z-50">
      <nav className="relative flex items-center justify-between px-4 sm:px-8 lg:px-16 h-[80px]">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="mr-2 sm:mr-4 w-14 sm:w-20" />
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-sm sm:text-2xl font-bold text-gray-800">United Tech & Solutions</p>
            <p className=" text-sm sm:text-xl font-semibold text-gray-600">- Australia's Best IT Company</p>
            
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <ImCross className="h-6 w-6 text-blue-600" /> : <FaBarsStaggered className="h-7 w-7 text-blue-600" />}
          </button>
        </div>
        <ul className="hidden lg:flex gap-6 sm:gap-8 text-lg">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Careers", id: "careers" },
            { name: "Contact Us", id: "contact" },
          ].map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.id)}
                className={`px-4 py-1  rounded-2xl transition duration-400 ${
                  activeSection === link.id
                    ? "border-b-4 border-blue-600 shadow-sm shadow-gray-600"
                    : "text-gray-700 border-b-4  border-transparent hover:text-blue-600"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 m-2 p-5 bg-white shadow-lg overflow-hidden shadow-blue-600 rounded-2xl py-4 lg:hidden">
            <ul className="flex flex-col items-center gap-1 text-lg">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Services", id: "services" },
                { name: "Careers", id: "careers" },
                { name: "Contact Us", id: "contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className={`px-4 py-1 rounded-2xl transition duration-400 ${
                      activeSection === link.id
                        ? "border-b-4 border-blue-600 shadow-sm shadow-gray-600"
                    : "text-gray-700 border-b-4  border-transparent hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;