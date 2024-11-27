import { useEffect, useState } from "react";
import { Popover, PopoverContent } from "@material-tailwind/react";
import FlightDateInput from "@/features/homepage/components/FlightDateInput";
import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import DatePicker from "@/features/homepage/components/DatePicker";
import FlightDateButton from "@/features/homepage/components/FlightDateButton";

const FlightDate = () => {
  const [date, setDate] = useState(null);
  const [tempDate, setTempDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleIsOn, setToggleIsOn] = useState(false);

  useEffect(() => {
    setDate(null);
    setTempDate(null);
  }, [toggleIsOn]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  function formattedDate(date) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    try {
      return date.toLocaleDateString("id-ID", options);
    } catch (error) {
      return "Pilih Tanggal";
    }
  }

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave() {
    setIsOpen(false);
    setDate(tempDate);
  }

  return (
    <div className="relative w-full">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[998]"></div>
      )}
      <Popover handler={handleOpen} open={isOpen}>
        <div className="flex w-full gap-10">
          <FlightDateInput
            date={date}
            formattedDate={formattedDate}
            label={"Departure"}
            type={"from"}
            onOpen={handleOpen}
            toggleIsOn={toggleIsOn}
          />
          <div className="w-full relative flex">
            <FlightDateInput
              date={date}
              formattedDate={formattedDate}
              label={"Return"}
              type={"to"}
              onOpen={handleOpen}
              toggleIsOn={toggleIsOn}
            />
            <ToggleSwitch
              color="#7126B5"
              className="mb-7 absolute top-[-10px] right-0"
              isOn={toggleIsOn}
              setIsOn={setToggleIsOn}
            />
          </div>
        </div>
        <PopoverContent className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] rounded-xl">
          <DatePicker
            date={tempDate}
            setDate={setTempDate}
            toggleIsOn={toggleIsOn}
          />
          <FlightDateButton
            date={tempDate}
            onSave={handleSave}
            setDate={setTempDate}
            toggleIsOn={toggleIsOn}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FlightDate;
