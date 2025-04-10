import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)} 
      className=" text-gray-700 font-bold flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <IoMdArrowRoundBack className="text-3xl text-blue-600"/> <span className="text-lg">Back</span>
    </button>
  );
};

export default BackButton;
