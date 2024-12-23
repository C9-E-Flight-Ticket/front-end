import { useEffect, useState } from "react";
import { Popover, PopoverContent } from "@material-tailwind/react";
import FlightDateInput from "@/features/homepage/components/FlightDateInput";
import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import DatePicker from "@/features/homepage/components/DatePicker";
import FlightDateButton from "@/features/homepage/components/FlightDateButton";
import { useDispatch, useSelector } from "react-redux";
import {
  changeReturnToggle,
  updateFlightDate,
} from "@/services/slices/homepageSlice";
import { convertLocalDateToUTC } from "@/utils/helper";

const FlightDate = () => {
  const [tempDate, setTempDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isReturnToggleActive } = useSelector((state) => state.homepage);
  const { flightDate } = useSelector((state) => state.homepage);

  const dispatch = useDispatch();

  // reset state when toggle change
  useEffect(() => {
    dispatch(updateFlightDate(null));
    setTempDate(null);
  }, [isReturnToggleActive, dispatch]);

  // turn off scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave() {
    setIsOpen(false);
    if (isReturnToggleActive) {
      const departureDate = convertLocalDateToUTC(tempDate.from);
      const returnDate = convertLocalDateToUTC(tempDate.to);

      dispatch(
        updateFlightDate({
          from: departureDate.toISOString().split("T")[0],
          to: returnDate.toISOString().split("T")[0],
        })
      );
    } else {
      const date = convertLocalDateToUTC(tempDate);
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
        <div className="flex md:flex-row flex-col w-full gap-10">
          <FlightDateInput
            date={flightDate}
            label={"Departure"}
            type={"from"}
            onOpen={handleOpen}
            toggleIsOn={isReturnToggleActive}
          />
          <div className="w-full relative flex">
            <FlightDateInput
              date={flightDate}
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
