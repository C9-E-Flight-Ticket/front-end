import {
  getDayName,
  formatDateToForwardSlash,
  formatDateToDash,
} from "@/utils/helper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFlightDates } from "../hooks/useFlightDates";

const days = [
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
  "Senin",
  "Selasa",
];

import { useNavigate } from "react-router-dom";
import { switchSearchCity, updateFlightDate } from "@/services/homepageSlice";
import { changeFlightStage, resetFlightState } from "@/services/flightSlice";

const SelectFlightButton = () => {
  const currentDate = new Date().toISOString();
  const { stage } = useSelector((state) => state.flight);
  const { flightDate, isReturnToggleActive, seatClass, passengers } =
    useSelector((state) => state.homepage);
  const [selectedDate, setSelectedDate] = useState(
    isReturnToggleActive ? flightDate.from : flightDate
  );
  const datesInWeek = useFlightDates(flightDate, isReturnToggleActive, stage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (stage == "return") {
      setSelectedDate(flightDate.to);
    } else {
      setSelectedDate(isReturnToggleActive ? flightDate.from : flightDate);
    }
  }, [stage, flightDate, isReturnToggleActive]);

  const handleSelectDay = (date) => {
    setSelectedDate(formatDateToDash(date));
    dispatch(
      updateFlightDate(
        isReturnToggleActive
          ? stage == "departure"
            ? { ...flightDate, from: formatDateToDash(date) }
            : { ...flightDate, to: formatDateToDash(date) }
          : formatDateToDash(date)
      )
    );
  };

  const handleBackToHomepage = () => {
    if (stage == "return") dispatch(switchSearchCity());
    navigate("/");
  };

  return (
    <div className="block px-2 md:px-4 py-2 gap-2 border-b border-[#D0D0D0]">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-2">
        <div className="flex items-center rounded-xl w-full md:w-[700px] h-[50px] bg-[#A06ECE] px-4 py-[5px] gap-2">
          <button onClick={handleBackToHomepage}>
            <img src="/arrow-left.png" className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <div className="text-white font-medium text-sm md:text-base px-[10px]">
            JKT {">"} MLB - {passengers.child + passengers.adult} Penumpang -{" "}
            {seatClass}
          </div>
        </div>
        <div className="w-full md:w-[200px]">
          <button
            className="bg-[#73CA5C] hover:bg-light-green-900 transition duration-300 w-full h-[45px] rounded-xl font-bold text-white text-base"
            onClick={handleBackToHomepage}
          >
            Ubah Pencarian
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-4 md:pt-2 pb-4 ">
        {datesInWeek.map((date, index) => (
          <div key={index} className="flex items-center">
            <div className="p-2">
              <button
                onClick={() => handleSelectDay(date)}
                className={`w-[80px] md:w-[100px] p-1 rounded-lg 
                    ${
                      formatDateToForwardSlash(selectedDate) ==
                      formatDateToForwardSlash(date)
                        ? "text-white bg-[#7126B5]"
                        : formatDateToForwardSlash(currentDate) ==
                          formatDateToForwardSlash(date)
                        ? "text-white bg-[#A06ECE]"
                        : ""
                    }`}
              >
                <div className="block text-center">
                  <p className="font-bold text-xs md:text-sm">
                    {getDayName(date)}
                  </p>
                  <p
                    className={`w-[72px] md:w-[92px] text-xs 
                        ${currentDate == date ? "text-white" : "text-[#8A8A8A]"}
                        ${
                          formatDateToForwardSlash(selectedDate) ==
                            formatDateToForwardSlash(date) ||
                          formatDateToForwardSlash(currentDate) ==
                            formatDateToForwardSlash(date)
                            ? "text-white"
                            : "text-[#8A8A8A]"
                        } `}
                  >
                    {formatDateToForwardSlash(datesInWeek[index])}
                  </p>
                </div>
              </button>
            </div>
            {index !== days.length - 1 && (
              <div className="hidden md:block h-6 border-l border-[#D0D0D0]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectFlightButton;
