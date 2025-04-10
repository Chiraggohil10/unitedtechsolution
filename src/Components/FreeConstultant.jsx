import React from 'react';
import Button from './common/Button';
import { useNavigate } from 'react-router-dom';

function FreeConstultant() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center py-12 px-2 my-15 sm:px-6 md:px-12 bg-gray-100 mx-2 lg:mx-20 sm:mx-5 md:mx-10 rounded-2xl shadow-xl scroll-m-20">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 drop-shadow-lg">
          Free <span className="text-blue-600">Consultation</span>
        </h1>
        <p className="text-sm sm:text-base text-left md:text-lg text-gray-700 mb-6">
          Get in touch with us for a free consultation and let us help you find the best IT solutions for your needs.
        </p>

        <div className="flex justify-center">
          <Button
            className="bg-blue-600 text-white py-2 px-6 font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => navigate('/form')}
          >
            Click here to claim
          </Button>
        </div>

        <div className="text-xs sm:text-sm text-gray-600 mt-4">
          Limit one time per person only (T&C apply)
        </div>
      </div>
    </div>
  );
}

export default FreeConstultant;
