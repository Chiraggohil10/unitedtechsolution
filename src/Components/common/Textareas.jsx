const Textareas = ({ name, placeholder, value, onChange, required }) => {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
    );
  };
  
  export default Textareas;
  