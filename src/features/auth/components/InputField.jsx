import React from "react";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  register,
  rules,
  error,
  watch,
}) => {
  const value = watch(name);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmailValid = type === "email" && emailRegex.test(value || "");

  return (
    <div className="w-full" style={{ width: "452px", marginBottom: "16px" }}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          {...register(name, rules)}
          type={type}
          placeholder={placeholder}
          className="w-full"
          style={{
            width: "452px",
            height: "48px",
            padding: "12px 16px",
            borderRadius: "16px",
            border: `1px solid ${error ? "#FF6B6B" : "#D0D0D0"}`,
            outline: "none",
          }}
        />
        {type === "email" && !isEmailValid && value?.length > 0 && (
          <img
            src="/icon-x.png"
            alt="icon-x"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        )}
        {type === "email" && isEmailValid && (
          <img
            src="/icon-check.png"
            alt="icon-check"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
