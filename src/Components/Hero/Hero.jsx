import React from "react";
import Heroes from "../../assets/Hero.jpg";
import AutoTypingText from "../AutoTypingText";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full min-h-[600px]" id="home">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center  bg-no-repeat brightness-75 "
        style={{ backgroundImage: `url(${Heroes})` }} 
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl cursor-default">
          Your Trusted Partner
          <br/>
          <span className="text-blue-600">for IT Solutions</span>
        </h1>

        {/* Auto Typing Text */}
        <div className="mt-4 font-semibold cursor-default">
          <AutoTypingText />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row  sm:flex-wrap gap-4 justify-center items-center w-full">
          <Button onClick={() => navigate("/techtohome")} className={'w-77 lg:w-75 sm:w-80'}>
            Tech to Home Services
          </Button>
          <Button onClick={() => navigate("/mobile")} className={"w-77 lg:w-75 sm:w-80"}>
            Mobile App Maintenance & Support
          </Button>
          <Button onClick={() => navigate("/itconsulting")} className={"w-77 lg:w-75 sm:w-80"}>
            IT Consulting & Business Automation
          </Button>
          <Button onClick={() => navigate("/Allservice")} className={"w-77 lg:w-75 sm:w-80"}>All Service</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
