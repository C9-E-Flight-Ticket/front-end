import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div style={{ width: "452px", marginBottom: "16px" }}>
      <label className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full"
        style={{
          width: "452px",
          height: "48px",
          padding: "12px 16px",
          borderRadius: "16px",
          border: "1px solid #D0D0D0",
          opacity: "1",
          outline: "none",
        }}
      />
    </div>
  );
};

export default InputField;
