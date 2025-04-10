import React from "react";
import { 
  FaSearchDollar, FaShieldAlt, FaProjectDiagram, 
  FaRobot, FaSyncAlt, FaMobileAlt, FaCode, FaCloud 
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsFillBadgeVrFill } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const services = [
  {
    title: "Tech to Home Support & Services",
    icon: <MdSupportAgent className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/one",
  },
  {
    title: "Digital Marketing & SEO",
    icon: <FaSearchDollar className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/two",
  },
  {
    title: "Cybersecurity Services",
    icon: <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/three",
  },
  {
    title: "IT Consulting & Business Automation",
    icon: <FaProjectDiagram className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/four",
  },
  {
    title: "AI & Machine Learning (ML) Solutions",
    icon: <FaRobot className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/five",
  },
  {
    title: "DevOps & Continuous Integration",
    icon: <FaSyncAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/six",
  },
  {
    title: "Augmented Reality & VR Development",
    icon: <BsFillBadgeVrFill className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/seven",
  },
  {
    title: "Mobile App Maintenance & Support",
    icon: <FaMobileAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/eight",
  },
  {
    title: "Blockchain & Cryptocurrency Solutions",
    icon: <SiBlockchaindotcom className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/nine",
  },
  {
    title: "Custom Software Development",
    icon: <FaCode className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/ten",
  },
  {
    title: "Cloud Solutions & Hosting Services",
    icon: <FaCloud className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/eleven",
  },
  {
    title: "Game Development",
    icon: <IoGameController className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/twelve",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services"  className='scroll-mt-30' >
      <div className="py-12  sm:px-6 md:px-12 bg-gray-100 mx-2 lg:mx-20 sm:mx-5 md:mx-10 my-15 rounded-2xl shadow-xl scroll-m-20" >
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-lg">
          Our <span className="text-blue-600">IT Services</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Explore our range of services designed to empower your business with technology.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-2 lg:p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
          >
            {service.icon}
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-6">
              {service.title}
            </h3>
            <Button onClick={() => navigate(service.end)}>Get Service</Button>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Services;
