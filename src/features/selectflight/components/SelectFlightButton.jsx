import {
  getDayName,
  formatDateToForwardSlash,
  formatDateToDash,
} from "@/utils/helper";
import { useState } from "react";
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
import { updateFlightDate } from "@/services/homepageSlice";

const SelectFlightButton = () => {
  const currentDate = new Date().toISOString();
  const { flightDate, isReturnToggleActive } = useSelector(
    (state) => state.homepage
  );
  const [selectedDate, setSelectedDate] = useState(
    isReturnToggleActive ? flightDate.from : flightDate
  );
  const datesInWeek = useFlightDates(flightDate, isReturnToggleActive);

  const navigate = useNavigate();

  /**
 * Ready For Return Flight
  const dispatch = useDispatch();
    dispatch(
      updateFlightDate(
        isReturnToggleActive
        ? { ...flightDate, from: formatDateToDash(date) }
        : formatDateToDash(date)
      )
    );
    */

  const handleSelectDay = (date) => {
    setSelectedDate(formatDateToDash(date));
  };

  return (
    <div className="block px-4 py-2 gap-[10px] border-b border-b-[#D0D0D0]">
      <div className="flex gap-3 h-[55px]">
        <div className="flex items-center rounded-xl w-[700px] h-[50px] bg-[#A06ECE] px-4 py-[5px] gap-2">
          <button>
            <img src="/arrow-left.png" />
          </button>
          <div className="text-white font-medium text-base px-[10px]">
            JKT {">"} MLB - 2 Penumpang - Economy
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#73CA5C] hover:bg-light-green-900 transition duration-300 w-[220px] h-[50px] rounded-xl font-bold text-white text-base"
            onClick={() => navigate("/")}
          >
            <div className="flex justify-center ml-2">Ubah Pencarian</div>
          </button>
        </div>
      </div>
      <div className="flex pt-2 pb-4">
        {datesInWeek.map((date, index) => (
          <div key={index} className="flex items-center">
            <div className="p-2">
              <button
                onClick={() => handleSelectDay(date)}
                className={`w-[100px] p-1 rounded-lg 
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
                <div className="block text-center ">
                  <p className="font-bold text-sm">{getDayName(date)}</p>
                  <p
                    className={`w-[92px] text-xs 
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
              <div className="h-6 border-l border-[#D0D0D0]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectFlightButton;
