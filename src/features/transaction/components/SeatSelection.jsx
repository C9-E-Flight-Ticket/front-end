import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SeatSelection = ({
  seats,
  returnSeats,
  selectedSeatsPergi,
  selectedSeatsPulang,
  setSelectedSeatsPergi,
  setSelectedSeatsPulang,
}) => {
  const { seatClass, passengers, isReturnToggleActive } = useSelector(
    (state) => state.homepage
  );
  const [activeTrip, setActiveTrip] = useState("Pergi");

  const getSeatLayout = (seatClass) => {
    switch (seatClass) {
      case "Economy":
        return {
          leftRows: ["A", "B", "C"],
          rightRows: ["D", "E", "F"],
          cols: 12,
          startRow: 13,
          endRow: 24,
        };
      case "Premium Economy":
        return {
          leftRows: ["A", "B", "C"],
          rightRows: ["D", "E", "F"],
          cols: 6,
          startRow: 7,
          endRow: 12,
        };
      case "Business":
        return {
          leftRows: ["A", "B"],
          rightRows: ["C", "D"],
          cols: 4,
          startRow: 3,
          endRow: 6,
        };
      case "First Class":
        return {
          leftRows: ["A", "B"],
          rightRows: ["C", "D"],
          cols: 2,
          startRow: 1,
          endRow: 2,
        };
      default:
        return {
          leftRows: ["A", "B", "C"],
          rightRows: ["D", "E", "F"],
          cols: 12,
          startRow: 1,
          endRow: 2,
        };
    }
  };

  const layout = getSeatLayout(seatClass);
  const totalSeats =
    (layout.leftRows.length + layout.rightRows.length) * layout.cols;
  const { leftRows, rightRows, cols } = layout;

  const toggleSeat = (seatNumber, isPergi = true) => {
    const setSelectedSeats = isPergi
      ? setSelectedSeatsPergi
      : setSelectedSeatsPulang;

    setSelectedSeats((prev = []) => {
      if (prev.some((seat) => seat.seatNumber === seatNumber)) {
        return prev.filter((seat) => seat.seatNumber !== seatNumber);
      }
      if (prev.length < passengers.adult + passengers.child) {
        const seatData = (
          !isPergi && isReturnToggleActive ? returnSeats : seats
        ).find((seat) => seat.seatNumber === seatNumber);
        return [
          ...prev,
          { seatNumber, label: `P${prev.length + 1}`, id: seatData.id },
        ];
      }
      return prev;
    });
  };

  const getSeatLabel = (seatNumber, isPergi = true) => {
    const selectedSeats = isPergi ? selectedSeatsPergi : selectedSeatsPulang;
    const selected = (selectedSeats || []).find(
      (seat) => seat.seatNumber === seatNumber
    );
    return selected ? selected.label : null;
  };

  const renderSeatMap = (isPergi = true) => {
    return (
      <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4">
        <div>
          <div
            className={`grid ${
              seatClass === "Economy"
                ? "grid-cols-3 "
                : seatClass === "Premium Economy"
                ? "grid-cols-3 "
                : seatClass === "Business"
                ? "grid-cols-2 "
                : seatClass === "First Class"
                ? "grid-cols-2 "
                : "grid-cols-3 "
            } gap-x-2 gap-y-2 sm:gap-x-3 lg:gap-x-4 lg:gap-y-3 text-gray-600`}
          >
            {leftRows.map((row) => (
              <div
                key={row}
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 font-bold"
              >
                {row}
              </div>
            ))}
          </div>
          <div
            className={`grid ${
              seatClass === "Economy"
                ? "grid-cols-3 "
                : seatClass === "Premium Economy"
                ? "grid-cols-3 "
                : seatClass === "Business"
                ? "grid-cols-2 "
                : seatClass === "First Class"
                ? "grid-cols-2 "
                : "grid-cols-3 "
            } gap-x-2 gap-y-2 sm:gap-x-3 lg:gap-x-4 lg:gap-y-3`}
          >
            {Array.from(
              { length: layout.endRow - layout.startRow + 1 },
              (_, i) => layout.startRow + i
            ).map((col) =>
              leftRows.map((row) => {
                const seatNumber = `${col}${row}`;
                const seatData = (
                  !isPergi && isReturnToggleActive ? returnSeats : seats
                ).find((seat) => seat.seatNumber === seatNumber);
                const isAvailable = seatData?.available;
                const label = getSeatLabel(seatNumber, isPergi);
                return (
                  <button
                    key={seatData?.id || seatNumber}
                    onClick={() =>
                      isAvailable && toggleSeat(seatNumber, isPergi)
                    }
                    className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 flex items-center justify-center border rounded ${
                      !isAvailable
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : label
                        ? "bg-purple-600 text-white"
                        : "bg-green-500"
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

        <div className="flex flex-col items-center justify-center pt-8 sm:pt-9 lg:pt-12 gap-y-2 lg:gap-y-3">
          {Array.from(
            { length: layout.endRow - layout.startRow + 1 },
            (_, i) => layout.startRow + i
          ).map((col) => (
            <div
              key={col}
              className="flex items-center justify-center w-5 h-8 sm:w-6 sm:h-9 lg:h-12 font-medium text-sm md:text-base text-gray-600 border rounded-lg bg-gray-200"
            >
              {col}
            </div>
          ))}
        </div>

        <div>
          <div
            className={`grid ${
              seatClass === "Economy"
                ? "grid-cols-3 "
                : seatClass === "Premium Economy"
                ? "grid-cols-3 "
                : seatClass === "Business"
                ? "grid-cols-2 "
                : seatClass === "First Class"
                ? "grid-cols-2 "
                : "grid-cols-3 "
            } gap-x-2 gap-y-2 sm:gap-x-3 lg:gap-x-4 lg:gap-y-3 text-gray-600`}
          >
            {rightRows.map((row) => (
              <div
                key={row}
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 font-bold"
              >
                {row}
              </div>
            ))}
          </div>
          <div
            className={`grid ${
              seatClass === "Economy"
                ? "grid-cols-3 "
                : seatClass === "Premium Economy"
                ? "grid-cols-3 "
                : seatClass === "Business"
                ? "grid-cols-2 "
                : seatClass === "First Class"
                ? "grid-cols-2 "
                : "grid-cols-3 "
            } gap-x-2 gap-y-2 sm:gap-x-3 lg:gap-x-4 lg:gap-y-3`}
          >
            {Array.from(
              { length: layout.endRow - layout.startRow + 1 },
              (_, i) => layout.startRow + i
            ).map((col) =>
              rightRows.map((row) => {
                const seatNumber = `${col}${row}`;
                const seatData = (
                  !isPergi && isReturnToggleActive ? returnSeats : seats
                ).find((seat) => seat.seatNumber === seatNumber);
                const isAvailable = seatData?.available;
                const label = getSeatLabel(seatNumber, isPergi);
                return (
                  <button
                    key={seatData?.id || seatNumber}
                    onClick={() =>
                      isAvailable && toggleSeat(seatNumber, isPergi)
                    }
                    className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 flex items-center justify-center border rounded ${
                      !isAvailable
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : label
                        ? "bg-purple-600 text-white"
                        : "bg-green-500"
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
    );
  };

  return (
    <div className="w-full p-5 mx-auto">
      <div className="p-3 md:p-5 border border-gray-300">
        <h1 className="mb-2 text-xl font-semibold">Pilih Kursi</h1>

        <Tabs value={activeTrip}>
          {isReturnToggleActive && (
            <TabsHeader>
              <Tab
                key="Pergi"
                value="Pergi"
                onClick={() => setActiveTrip("Pergi")}
              >
                Pergi
              </Tab>

              <Tab
                key="Pulang"
                value="Pulang"
                onClick={() => setActiveTrip("Pulang")}
              >
                Pulang
              </Tab>
            </TabsHeader>
          )}

          <TabsBody>
            <TabPanel className="p-2 md:p-4" key="Pergi" value="Pergi">
              <div className="p-3 text-center rounded-md bg-green-500">
                <p className="text-xs font-normal text-white">
                  {seatClass} - {totalSeats} Seats available
                </p>
              </div>
              {renderSeatMap(true)}
            </TabPanel>
            {isReturnToggleActive && (
              <TabPanel key="Pulang" value="Pulang">
                <div className="p-3 text-center rounded-md bg-green-500">
                  <p className="text-xs font-normal text-white">
                    {seatClass} - {totalSeats} Seats available
                  </p>
                </div>
                {renderSeatMap(false)}
              </TabPanel>
            )}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default SeatSelection;
