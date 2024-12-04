import { currentDayName } from "@/utils/helper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectFlightButton = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const currentDay = currentDayName(new Date());
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

  const selectDay = (selected) => {
    setSelectedDay(selected);
  };

  const navigate = useNavigate();

  return (
    <div className="block px-4 py-2 gap-[10px]">
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
        {days.map((day, index) => (
          <div key={index} className="flex items-center">
            <div className="p-2">
              <button
                onClick={() => selectDay(index)}
                className={`w-[100px] p-1 rounded-lg 
                    ${
                      selectedDay === index && currentDay === day
                        ? "text-white bg-[#7126B5]"
                        : selectedDay === index
                        ? "text-white bg-[#7126B5]"
                        : currentDay === day
                        ? "text-white bg-[#A06ECE]"
                        : ""
                    }`}
              >
                <div className="block text-center ">
                  <p className="font-bold text-sm">{day}</p>
                  <p
                    className={`w-[92px] text-xs 
                        ${currentDay === day ? "text-white" : "text-[#8A8A8A]"}
                        ${
                          selectedDay === index
                            ? "text-white"
                            : "text-[#8A8A8A]"
                        } `}
                  >
                    01/03/2023
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
