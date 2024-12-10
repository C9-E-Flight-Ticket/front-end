import { useNavigate } from "react-router-dom";

const InputField = ({
  label,
  name,
  type,
  withForgotPassword = false,
  placeholder,
  register,
  rules,
  error,
  watch,
}) => {
  const value = watch(name);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^(\+?\d{1,3}|\d{1,4})?\s?\d+$/;

  const isEmailValid = type === "email" && emailRegex.test(value || "");
  const isNameValid = name === "name" && nameRegex.test(value || "");
  const isPhoneValid = name === "phone" && phoneRegex.test(value || "");
  const isPasswordValid = type === "password" && value?.length >= 6;
  const isEmailOrPhoneNumberValid =
    (type === "email/phoneNumber" && emailRegex.test(value || "")) ||
    phoneRegex.test(value || "");

  const isValid =
    (type === "email" && isEmailValid) ||
    (name === "name" && isNameValid) ||
    (name === "phone" && isPhoneValid) ||
    (type === "password" && isPasswordValid) ||
    (type === "email/phoneNumber" && isEmailOrPhoneNumberValid);

  const navigate = useNavigate();

  return (
    <div className="w-full" style={{ width: "452px", marginBottom: "16px" }}>
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        {withForgotPassword && (
          <p
            className="text-sm text-purple-500 font-medium hover:cursor-pointer"
            onClick={() => navigate("/reset-password")}
          >
            Lupa Kata Sandi
          </p>
        )}
      </div>
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
            border: `1.5px solid ${error ? "#FF6B6B" : "#D0D0D0"}`,
            outline: "none",
          }}
        />
        {value?.length > 0 && (
          <img
            src={isValid && !error ? "/icon-check.png" : "/icon-x.png"}
            alt={isValid && !error ? "Valid" : "Invalid"}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
