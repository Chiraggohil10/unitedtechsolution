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
    price: "Starting at $150/month",
    category: "Support",
    tags: ["On-site", "Troubleshooting", "Remote Help"],
    badge: "Popular",
  },
  {
    title: "Digital Marketing & SEO",
    icon: <FaSearchDollar className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/two",
    price: "Starting at $300/month",
    category: "Marketing",
    tags: ["SEO", "Social Media", "Google Ads"],
    badge: "Best Value",
  },
  {
    title: "Cybersecurity Services",
    icon: <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/three",
    price: "Starting at $500/month",
    category: "Security",
    tags: ["Network Security", "Audits", "Compliance"],
  },
  {
    title: "IT Consulting & Business Automation",
    icon: <FaProjectDiagram className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/four",
    price: "Starting at $400/month",
    category: "Consulting",
    tags: ["Process Optimization", "Workflow Automation", "Tech Strategy"],
  },
  {
    title: "AI & Machine Learning (ML) Solutions",
    icon: <FaRobot className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/five",
    price: "Starting at $800/month",
    category: "Development",
    tags: ["Prediction Models", "Data Science", "AI Chatbots"],
  },
  {
    title: "DevOps & Continuous Integration",
    icon: <FaSyncAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/six",
    price: "Starting at $600/month",
    category: "Development",
    tags: ["CI/CD", "Automation", "Monitoring"],
    badge: "Popular",
  },
  {
    title: "Augmented Reality & VR Development",
    icon: <BsFillBadgeVrFill className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/seven",
    price: "Starting at $1000/month",
    category: "Development",
    tags: ["AR Apps", "3D Interaction", "VR Training"],
  },
  {
    title: "Mobile App Maintenance & Support",
    icon: <FaMobileAlt className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/eight",
    price: "Starting at $120/month",
    category: "Support",
    tags: ["Bug Fixes", "Updates", "Monitoring"],
  },
  {
    title: "Blockchain & Cryptocurrency Solutions",
    icon: <SiBlockchaindotcom className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/nine",
    price: "Starting at $1000/month",
    category: "Development",
    tags: ["Smart Contracts", "dApps", "Crypto Integration"],
  },
  {
    title: "Custom Software Development",
    icon: <FaCode className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/ten",
    price: "Starting at $500/month",
    category: "Development",
    tags: ["Web Apps", "Enterprise Tools", "Full Stack"],
    badge: "Best Value",
  },
  {
    title: "Cloud Solutions & Hosting Services",
    icon: <FaCloud className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/eleven",
    price: "Starting at $200/month",
    category: "Cloud",
    tags: ["AWS", "Azure", "Cloud Migration"],
  },
  {
    title: "Game Development",
    icon: <IoGameController className="text-blue-600 text-5xl mx-auto mb-4" />,
    end: "/twelve",
    price: "Starting at $800/month",
    category: "Development",
    tags: ["2D/3D Games", "Unity", "Multiplayer"],
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="scroll-mt-30 cursor-default">
      <div className="py-12 sm:px-6 md:px-12 bg-gray-100 mx-2 lg:mx-20 sm:mx-5 md:mx-10 my-15 rounded-2xl shadow-xl scroll-m-20">
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
              className="relative bg-white p-4 lg:p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-2 left-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg shadow">
                  {service.badge}
                </span>
              )}

              {service.icon}

              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
              <h2 className="text-sm lg:text-lg font-semibold text-gray-600 mb-2">
                {service.price}
              </h2>

              {/* Tags */}
              <div className="flex justify-center flex-wrap gap-1 mb-3">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button onClick={() => navigate(service.end)}>Get Service</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
