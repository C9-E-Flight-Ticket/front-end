import { Button } from "@material-tailwind/react";

const FlightDateButton = ({ date, setDate, onSave, toggleIsOn }) => {
  return (
    <div className="mb-5 mt-1 flex justify-between mx-10">
      <Button
        variant="outlined"
        color="red"
        className="normal-case disabled:!bg-[#3e1f5c]"
        onClick={() => setDate([])}
      >
        Bersihkan
      </Button>
      <Button
        variant="filled"
        color="deep-purple"
        className="normal-case bg-primaryPurple disabled:!bg-[#3e1f5c]"
        disabled={!date || toggleIsOn ? date?.from === date?.to : !date}
        onClick={onSave}
      >
        Simpan
      </Button>
    </div>
  );
};

export default FlightDateButton;
