import { useEffect, useState } from "react";
import { Popover, PopoverContent } from "@material-tailwind/react";
import FlightDateInput from "@/features/homepage/components/FlightDateInput";
import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import DatePicker from "@/features/homepage/components/DatePicker";
import FlightDateButton from "@/features/homepage/components/FlightDateButton";
import { useDispatch, useSelector } from "react-redux";
import { changeReturnToggle, updateFlightDate } from "@/services/homepageSlice";

const FlightDate = () => {
  const [tempDate, setTempDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isReturnToggleActive } = useSelector((state) => state.homepage);
  const { flightDate } = useSelector((state) => state.homepage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFlightDate(null));
    setTempDate(null);
  }, [isReturnToggleActive, dispatch]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  function formattedDate(date) {
    const dateFormat = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    try {
      return dateFormat.toLocaleDateString("id-ID", options);
    } catch (error) {
      console.log(error);
      return "Pilih Tanggal";
    }
  }

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave() {
    setIsOpen(false);

    if (isReturnToggleActive) {
      const departureDate = new Date(tempDate.from);
      const returnDate = new Date(tempDate.to);
      dispatch(
        updateFlightDate({
          from: departureDate.toISOString().split("T")[0],
          to: returnDate.toISOString().split("T")[0],
        })
      );
    } else {
      const date = new Date(tempDate);
      dispatch(updateFlightDate(date.toISOString().split("T")[0]));
    }
  }

  function handleToggleChange() {
    dispatch(changeReturnToggle());
  }

  return (
    <div className="relative w-full">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[998]"></div>
      )}
      <Popover handler={handleOpen} open={isOpen}>
        <div className="flex w-full gap-10">
          <FlightDateInput
            date={flightDate}
            formattedDate={formattedDate}
            label={"Departure"}
            type={"from"}
            onOpen={handleOpen}
            toggleIsOn={isReturnToggleActive}
          />
          <div className="w-full relative flex">
            <FlightDateInput
              date={flightDate}
              formattedDate={formattedDate}
              label={"Return"}
              type={"to"}
              onOpen={handleOpen}
              toggleIsOn={isReturnToggleActive}
            />
            <ToggleSwitch
              color="#7126B5"
              className="mb-7 absolute top-[-10px] right-0"
              isOn={isReturnToggleActive}
              globalHandler={handleToggleChange}
            />
          </div>
        </div>
        <PopoverContent className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] rounded-xl">
          <DatePicker
            date={tempDate}
            setDate={setTempDate}
            toggleIsOn={isReturnToggleActive}
          />
          <FlightDateButton
            date={tempDate}
            onSave={handleSave}
            setDate={setTempDate}
            toggleIsOn={isReturnToggleActive}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FlightDate;
