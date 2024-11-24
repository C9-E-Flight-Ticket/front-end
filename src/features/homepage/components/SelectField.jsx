import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const SelectField = ({ label = "", width = "5rem", ...props }) => {
  const [value, setValue] = useState(null);
  return (
    <Select
      value={value}
      onChange={(val) => setValue(val)}
      variant="static"
      label={label}
      className={`text-lg !text-black placeholder:text-sm ${!label && "!py-0"}`}
      labelProps={{
        className: "!text-[#8A8A8A]",
      }}
      containerProps={{ className: `max-w-[${width}] min-w-0` }}
      {...props}
    >
      <Option value="1">Material Tailwind HTML</Option>
      <Option value="2">Material Tailwind React</Option>
      <Option value="3">Material Tailwind Vue</Option>
    </Select>
  );
};

export default SelectField;
