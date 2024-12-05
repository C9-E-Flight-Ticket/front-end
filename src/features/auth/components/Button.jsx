import React from "react";

const Button = ({ type, text, color }) => {
  return (
    <button
      type={type}
      className={`w-full py-2 px-4 ${color} text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75`}
    >
      {text}
    </button>
  );
};

export default Button;
