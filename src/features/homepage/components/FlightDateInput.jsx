import { Button } from "@material-tailwind/react";

const DepartureDateInput = ({
  date,
  formattedDate,
  label,
  type,
  onOpen,
  toggleIsOn,
  ...props
}) => {
  return (
    <div className="w-full h-[70px] flex flex-col justify-between">
      <p htmlFor="input" className="text-textGrey text-sm">
        {label}
      </p>
      <Button
        id="input"
        variant="text"
        fullWidth
        className="text-start text-sm font-semibold px-0 hover:bg-transparent active:bg-transparent border-b rounded-none border-blue-gray-200 normal-case focus:outline-none focus:ring-0 transition-none"
        ripple={false}
        onClick={onOpen}
        disabled={!toggleIsOn && type === "to"}
        {...props}
      >
        {!toggleIsOn && type === "to" ? (
          "Tidak Diaktifkan"
        ) : !toggleIsOn && date ? (
          formattedDate(date)
        ) : date?.[type] ? (
          formattedDate(date[type])
        ) : (
          <span className="text-primaryPurple">Pilih Tanggal</span>
        )}
      </Button>
    </div>
  );
};

export default DepartureDateInput;
