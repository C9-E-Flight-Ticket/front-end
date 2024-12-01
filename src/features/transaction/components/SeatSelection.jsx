import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SeatSelection = () => {
  const location = useLocation();
  const seatClass = location.state?.seatClass || "Economy";

  const getSeatLayout = (seatClass) => {
    switch (seatClass) {
      case "Economy":
        return {
          leftRows: ["A", "B", "C"],
          rightRows: ["D", "E", "F"],
          cols: 12,
        };
      case "Business":
        return { leftRows: ["A", "B"], rightRows: ["C", "D"], cols: 6 };
      case "First Class":
        return { leftRows: ["A"], rightRows: ["B"], cols: 4 };
      default:
        return {
          leftRows: ["A", "B", "C"],
          rightRows: ["D", "E", "F"],
          cols: 12,
        };
    }
  };
  const layout = getSeatLayout(seatClass);
  const totalSeats =
    (layout.leftRows.length + layout.rightRows.length) * layout.cols;
  const { leftRows, rightRows, cols } = layout;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const unavailableSeats = [];
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
            {seatClass} - {totalSeats} Seats available
          </p>
        </div>
        <div className="gap-4 flex justify-center">
          <div>
            <div
              className={`grid grid-cols-${rightRows.length} gap-x-4 text-textGrey`}
            >
              {leftRows.map((row) => (
                <div
                  key={row}
                  className="w-12 h-12 flex items-center justify-center font-bold"
                >
                  {row}
                </div>
              ))}
            </div>
            <div
              className={`grid grid-cols-${leftRows.length} gap-x-4 gap-y-3`}
            >
              {Array.from({ length: cols }, (_, i) => i + 1).map((col) =>
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
            {Array.from({ length: layout.cols }, (_, i) => i + 1).map((col) => (
              <div
                key={col}
                className="w-6 h-12 flex items-center justify-center font-medium border rounded-lg text-textGrey bg-lightGray"
              >
                {col}
              </div>
            ))}
          </div>
          <div>
            <div
              className={`grid grid-cols-${rightRows.length} gap-x-4 text-textGrey`}
            >
              {rightRows.map((row) => (
                <div
                  key={row}
                  className="w-12 h-12 flex items-center justify-center font-bold"
                >
                  {row}
                </div>
              ))}
            </div>
            <div
              className={`grid grid-cols-${rightRows.length} gap-x-4 gap-y-3`}
            >
              {Array.from({ length: cols }, (_, i) => i + 1).map((col) =>
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
