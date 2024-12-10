import React, { useRef } from "react";

const OtpInput = ({ value, onChange }) => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const newOtp = [...value];
    newOtp[index] = e.target.value;
    onChange(newOtp);

    if (e.target.value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          className="w-12 h-12 text-center border border-gray-400 rounded-2xl text-lg"
        />
      ))}
    </div>
  );
};

export default OtpInput;
