import { Select, Option } from "@material-tailwind/react";

const DestinationFilterDropdown = ({ continents, selected, handleSelect }) => {
  return (
    <>
      <Select
        value={selected}
        onChange={(value) => handleSelect(value)}
        size="lg"
        className="border-[#adadad] border checked:text-white"
        labelProps={{
          className: "before:!border-transparent after:!border-transparent",
        }}
        menuProps={{ className: "text-black" }}
      >
        {continents.map((continent) => (
          <Option value={`${continent}`}>{continent}</Option>
        ))}
      </Select>
    </>
  );
};

export default DestinationFilterDropdown;
