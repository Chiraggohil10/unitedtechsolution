import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact, FaNode, FaWordpress, FaAws } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

function Technology() {

  const Technologies = [
    { id: 1, name: "HTML5", icon: <IoLogoHtml5 className='w-15 h-15' /> },
    { id: 2, name: "CSS3", icon: <IoLogoCss3 className='w-15 h-15' /> },
    { id: 3, name: "JavaScript", icon: <TbBrandJavascript className='w-15 h-15' /> },
    { id: 4, name: "React JS", icon: <FaReact className='w-15 h-15' /> },
    { id: 6, name: "WordPress", icon: <FaWordpress className='w-15 h-15' /> },
    { id: 9, name: "Flutter", icon: <FaFlutter className='w-15 h-15' /> },
    { id: 5, name: "Node JS", icon: <FaNode className='w-15 h-15' /> },
    { id: 8, name: "AWS", icon: <FaAws className='w-15 h-15' /> },
    { id: 7, name: "Azure", icon: <VscAzure className='w-15 h-15' /> },
    { id: 10, name: "MySQL", icon: <SiMysql className='w-15 h-15' /> },
  ]

  return (
    <div className="flex flex-col items-center text-center py-16 my-15 lg:px:12 bg-gray-100 rounded-2xl shadow-xl mx-4 md:mx-12 lg:mx-20 scroll-m-20">
      <div className="w-full max-w-7xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 drop-shadow-lg">
        Technologies <span className="text-blue-600">We Use</span>
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-7xl mx-auto mb-8">
          We use the latest and most advanced technologies to deliver cutting-edge solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {Technologies.map((tech) => (
            <div
              key={tech.id}
              className="w-30 h-30 lg:w-50 lg:h-36 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center p-4 group"
            >
              <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technology
