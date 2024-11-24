import { Input } from "@material-tailwind/react";

const InputField = ({ placeholder, label = "", width = "5rem", ...props }) => {
  return (
    <Input
      variant="static"
      label={label}
      className={`text-lg !text-black placeholder:text-sm ${!label && "!py-0"}`}
      color="black"
      placeholder={placeholder}
      labelProps={{
        className: "!text-[#8A8A8A]",
      }}
      containerProps={{ className: `max-w-[${width}] min-w-0` }}
      {...props}
    />
  );
};

export default InputField;
