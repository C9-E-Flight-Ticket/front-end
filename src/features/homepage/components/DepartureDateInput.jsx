import { Input } from "@material-tailwind/react";

const DepartureDateInput = ({ date, formattedDate, ...props }) => {
  return (
    <Input
      {...props}
      label="Departure"
      variant="static"
      className="!text-black font-semibold"
      onChange={() => null}
      value={date?.from ? formattedDate(date.from) : ""}
    />
  );
};

export default DepartureDateInput;
