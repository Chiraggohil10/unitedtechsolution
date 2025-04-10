const Button = ({ type, className, children, onClick }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-3 py-2 bg-blue-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-blue-700  ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  