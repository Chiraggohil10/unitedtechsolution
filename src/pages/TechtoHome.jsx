import React from 'react';
import BackButton from '../Components/BackButton';
import Button from '../Components/common/Button';
import { useNavigate } from 'react-router-dom';
import {
  RiHomeWifiFill,
  RiHomeOfficeFill,
} from "react-icons/ri";
import { FaComputer, FaFileAudio, FaVirusCovidSlash } from "react-icons/fa6";
import { TiWiFi } from "react-icons/ti";
import { BsFillPrinterFill } from "react-icons/bs";
import { LuDatabaseBackup } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { MdBrowserUpdated, MdAddHomeWork } from "react-icons/md";

const services = [
  { icon: <RiHomeWifiFill className='text-3xl text-blue-600' />, text: "Smart Home Device Setup" },
  { icon: <FaComputer className='text-3xl text-blue-600' />, text: "Computer & Laptop Setup" },
  { icon: <TiWiFi className='text-3xl text-blue-600' />, text: "Wi-Fi & Router Configuration" },
  { icon: <BsFillPrinterFill className='text-3xl text-blue-600' />, text: "Printer Setup & Troubleshooting" },
  { icon: <LuDatabaseBackup className='text-3xl text-blue-600' />, text: "Data Backup & Recovery" },
  { icon: <IoGameController className='text-3xl text-blue-600' />, text: "Gaming Console Setup" },
  { icon: <FaFileAudio className='text-3xl text-blue-600' />, text: "Audio System Setup" },
  { icon: <MdBrowserUpdated className='text-3xl text-blue-600' />, text: "Software Installation & Troubleshooting" },
  { icon: <FaVirusCovidSlash className='text-3xl text-blue-600' />, text: "Virus Removal & Security Setup" },
  { icon: <RiHomeOfficeFill className='text-3xl text-blue-600' />, text: "Home Office Setup" },
  { icon: <MdAddHomeWork className='text-3xl text-blue-600' />, text: "Smart Appliance Installation" },
];

function TechtoHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 lg:px-32 py-10 bg-gray-50">
    <div className="mt-20 mb-6">
      <BackButton />
    </div>

      <div className='text-xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-700 mb-10 bg-gray-100 max-w-3xl mx-auto rounded-2xl shadow-xl px-6 py-4'>
        Tech to <span className='text-blue-600'>Home Service</span> 🏠
      </div>

      <p className='text-sm sm:text-lg md:text-xl text-gray-700  mb-8 text-left'>
        At <b className='text-blue-600 font-bold'>United Tech and Solutions</b>, we bring technology support right to your doorstep. With our Tech to Home service, our skilled technicians visit your location to provide personalised assistance with your tech needs. We ensure your devices are set up, configured, and functioning seamlessly.
      </p>

      <div className="bg-gray-100 p-1 lg:p-6 rounded-xl shadow-lg my-10">
        <h2 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-5">
          Our Tech to <span className='text-blue-600'>Home Services</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow-md">
              {service.icon}
              <p className="text-gray-700 text-[12px] sm:text-lg font-semibold">{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <Button className='text-white mb-6 px-6 py-2 text-lg' type='button' onClick={() => navigate('/form')} children={'Get Service'} />
      </div>

      <div className='text-center mb-7'>
        <p className='text-sm sm:text-2xl font-semibold'>Book our <span className='text-blue-600'>Tech to Home Service</span> Today!</p>
        <p className='text-sm sm:text-xl font-medium mt-4'>Experience hassle-free tech support.</p>
      </div>

      <div className='text-gray-700 text-sm sm:text-lg md:text-xl'>
        <b className='text-blue-600 block mb-3'>Why Choose United Tech and Solutions for Tech to Home Service?</b>
        <ul className='list-disc ml-5 sm:ml-10 space-y-2'>
          <li>On-demand, convenient service at your home.</li>
          <li>Expert technicians who ensure everything works perfectly.</li>
          <li>The most affordable rates in Australia without compromising quality.</li>
          <li>Friendly and reliable support tailored to your needs.</li>
        </ul>
      </div>
    </div>
  );
}

export default TechtoHome;
