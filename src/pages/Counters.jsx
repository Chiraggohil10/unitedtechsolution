import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Code2 } from "lucide-react";

const Counter = ({ end, label, Icon }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ count: end, transition: { duration: 2 } });
    }
  }, [controls, inView, end]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mb-3" />
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-blue-600"
        initial={{ count: 0 }}
        animate={controls}
      >
        {Math.round(end)}+
      </motion.h2>
      <p className="mt-1 text-base sm:text-lg text-gray-700">{label}</p>
    </motion.div>
  );
};

const AnimatedCounters = () => {
  const counters = [
    { end: 10, label: "Years in Business", Icon: Briefcase },
    { end: 50, label: "Clients Served", Icon: Users },
    { end: 100, label: "Projects Delivered", Icon: Code2 },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 md:px-12 bg-gray-100 mx-4 lg:mx-20 cursor-default sm:mx-5 md:mx-10 my-15 rounded-2xl shadow-xl scroll-m-20">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-lg">
          Our <span className="text-blue-600">Achievements</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">Here’s what we’ve accomplished so far</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
        {counters.map((counter, index) => (
          <Counter key={index} {...counter} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounters;
