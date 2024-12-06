const Button = ({ text, color, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white py-2 px-4 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
