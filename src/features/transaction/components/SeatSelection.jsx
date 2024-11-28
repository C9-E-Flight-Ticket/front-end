import React, { useState } from "react";

const SeatSelection = () => {
  const classInfo = {
    name: "Economy",
    totalSeats: 64,
  };

  const leftRows = ["A", "B", "C"];
  const rightRows = ["D", "E", "F"];
  const cols = Array.from({ length: 12 }, (_, i) => i + 1);
  const unavailableSeats = ["A1", "A2", "A4", "D4"];
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.find((s) => s.seat === seat)) {
        return prev.filter((s) => s.seat !== seat);
      } else {
        return [...prev, { seat, label: `P${prev.length + 1}` }];
      }
    });
  };

  const getSeatLabel = (seat) => {
    const selected = selectedSeats.find((s) => s.seat === seat);
    return selected ? selected.label : null;
  };

  return (
    <div className="w-full p-5 mx-auto">
      <div className="p-5 border border-textGrey">
        <h1 className="mb-2 text-xl font-semibold">Pilih Kursi</h1>
        <div className="p-3 text-center rounded-md bg-lightGreen">
          <p className="text-xs font-normal text-white">
            {classInfo.name} - {classInfo.totalSeats} Seats available
          </p>
        </div>
        <div className="gap-4 flex justify-center">
          <div>
            <div className="grid grid-cols-3 gap-x-4 text-textGrey">
              {leftRows.map((row) => (
                <div
                  key={row}
                  className="w-12 h-12 flex items-center justify-center font-bold"
                >
                  {row}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {cols.map((col) =>
                leftRows.map((row) => {
                  const seat = `${row}${col}`;
                  const isAvailable = !unavailableSeats.includes(seat);
                  const label = getSeatLabel(seat);
                  return (
                    <button
                      key={seat}
                      onClick={() => isAvailable && toggleSeat(seat)}
                      className={`w-12 h-12 flex items-center justify-center border rounded ${
                        !isAvailable
                          ? "bg-borderGrey cursor-not-allowed text-white"
                          : label
                          ? "bg-textPurple text-white"
                          : "bg-lightGreen"
                      }`}
                      disabled={!isAvailable}
                    >
                      {isAvailable ? label || "" : "X"}
                    </button>
                  );
                })
              )}
            </div>
          </div>
          <div className="gap-y-3 pt-12 flex flex-col items-center justify-center">
            {cols.map((col) => (
              <div
                key={col}
                className="w-6 h-12 flex items-center justify-center font-medium border rounded-lg text-textGrey bg-lightGray"
              >
                {col}
              </div>
            ))}
          </div>
          <div>
            <div className="grid grid-cols-3 gap-x-4 text-textGrey">
              {rightRows.map((row) => (
                <div
                  key={row}
                  className="w-12 h-12 flex items-center justify-center font-bold"
                >
                  {row}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {cols.map((col) =>
                rightRows.map((row) => {
                  const seat = `${row}${col}`;
                  const isAvailable = !unavailableSeats.includes(seat);
                  const label = getSeatLabel(seat);
                  return (
                    <button
                      key={seat}
                      onClick={() => isAvailable && toggleSeat(seat)}
                      className={`w-12 h-12 flex items-center justify-center border rounded ${
                        !isAvailable
                          ? "bg-borderGrey cursor-not-allowed text-white"
                          : label
                          ? "bg-textPurple text-white"
                          : "bg-lightGreen"
                      }`}
                      disabled={!isAvailable}
                    >
                      {isAvailable ? label || "" : "X"}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
