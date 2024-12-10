const ToggleSwitch = ({
  color = "gray",
  label = "",
  className = "",
  disabled = false,
  containerProps = {},
  labelProps = {},
  isOn,
  setIsOn = null,
  globalHandler = null,
}) => {
  const toggleSwitch = () => {
    if (!disabled) {
      setIsOn ? setIsOn(!isOn) : globalHandler();
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`} {...containerProps}>
      <div
        onClick={toggleSwitch}
        className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? `bg-[${color}]` : "bg-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div
          className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
      <label
        className={`cursor-pointer text-sm select-none ${
          disabled ? "opacity-50" : ""
        }`}
        {...labelProps}
      >
        {label}
      </label>
    </div>
  );
};

export default ToggleSwitch;
