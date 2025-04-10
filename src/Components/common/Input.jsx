const Input = ({ type, name, placeholder, value, onChange, required, accept,id,pattern }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        accept={accept}
        pattern={pattern}
        id={id}
        className="w-full border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
  export default Input;
  