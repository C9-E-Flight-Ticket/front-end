import { useState } from "react";

const SelectFlightButton = () => {
  const [selectedDay, setSelectedDay] = useState("");

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

  return (
    <div className="absolute top-1/2 left-1/3">
      <div className="block">
        <div className="flex gap-3">
          <div className="flex items-center rounded-xl w-[700px] h-[50px] bg-[#A06ECE] px-4 py-[5] gap-2">
            <button>
              <img src="/arrow-left.png" />
            </button>
            <div className="text-white font-medium text-base px-[10px]">
              JKT {">"} MLB - 2 Penumpang - Economy
            </div>
          </div>
          <button className="bg-[#73CA5C] hover:bg-light-green-900 transition duration-300 w-[220px] h-[50px] rounded-xl font-bold text-white text-center text-base">
            Ubah Pencarian
          </button>
        </div>
        <div className="flex pt-2 pb-4 border-b border-[#D0D0D0]">
          {days.map((day, index) => (
            <div key={index} className="flex items-center">
              <div className="p-2">
                <button
                  onClick={() => selectDay(index)}
                  className={`w-[100px] p-1 rounded-lg ${
                    selectedDay === index ? "text-white bg-[#7126B5]" : ""
                  }`}
                >
                  <div className="block text-center ">
                    <p className="font-bold text-sm">{day}</p>
                    <p
                      className={`w-[92px] text-xs ${
                        selectedDay === index ? "text-white" : "text-[#8A8A8A]"
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
    </div>
  );
};

export default SelectFlightButton;
