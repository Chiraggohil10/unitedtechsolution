import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

function WhyUts() {
  const navigate = useNavigate();

  return (
    <section id="about" className='scroll-mt-30' >
      <div
      className="flex flex-col items-center my-15 py-12 px-4 sm:px-6 md:px-12 bg-gray-100 mx-4 lg:mx-20 sm:mx-5 md:mx-10 rounded-2xl shadow-xl scroll-m-20"
      
    >
      <h1 className="text-2xl sm:text-xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg">
        Why Choose <span className="text-blue-600">United Tech & Solutions?</span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg w-full  text-gray-700  text-left max-w-7xl">
        At <b className="text-blue-600">United Tech and Solutions</b>, we are committed to transforming your business vision into
        reality with cutting-edge technology and tailored solutions. Our team of seasoned experts
        works collaboratively to understand your unique challenges and craft innovative strategies
        that drive measurable results.
        <br /><br />
        We pride ourselves on delivering end-to-end services, from consultation and implementation
        to ongoing support, ensuring a seamless experience. With a customer-first approach,
        transparent communication, and a focus on long-term partnerships, we empower businesses
        to stay ahead in today’s digital landscape.
      </p>

      <div className="mt-8">
        <Button
          onClick={() => navigate('/aboutus')}
          className="bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 px-6 py-2"
        >
          Click For More
        </Button>
      </div>
    </div>
    </section>
  );
}

export default WhyUts;
