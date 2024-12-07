import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useGetDetailFlightQuery } from "@/services/api/detailFlightApi";

const SeatSelection = () => {
  const { seatClass, passengers, isReturnToggleActive } = useSelector(
    (state) => state.homepage
  );
  const [activeTrip, setActiveTrip] = useState("Pergi");
  const [selectedSeatsPergi, setSelectedSeatsPergi] = useState([]);
  const [selectedSeatsPulang, setSelectedSeatsPulang] = useState([]);

  const { data, isLoading, error, isFetching } = useGetDetailFlightQuery(
    {
      flightId: [1],
      seatClass: seatClass,
      adult: passengers.adult,
      child: passengers.child,
      baby: passengers.baby,
    },
    { refetchOnMountOrArgChange: true }
  );

  const apiData = data?.payload.datas;
  const seats = apiData?.flights[0].seats;
  // console.log(apiData);
  // console.log(seats);
  // console.log(selectedSeatsPergi);
  // console.log(selectedSeatsPulang);

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

  const toggleSeat = (seat, isPergi = true) => {
    const setSelectedSeats = isPergi
      ? setSelectedSeatsPergi
      : setSelectedSeatsPulang;

    setSelectedSeats((prev = []) => {
      if (prev.find((s) => s.seat === seat)) {
        return prev.filter((s) => s.seat !== seat);
      }
      if (prev.length < passengers.adult + passengers.child) {
        return [...prev, { seat, label: `P${prev.length + 1}` }];
      }
      return prev;
    });
  };

  const getSeatLabel = (seat, isPergi = true) => {
    const selectedSeats = isPergi ? selectedSeatsPergi : selectedSeatsPulang;
    const selected = (selectedSeats || []).find((s) => s.seat === seat);
    return selected ? selected.label : null;
  };

  const renderSeatMap = (isPergi = true) => {
    const unavailableSeats = [];

    return (
      <div className="flex justify-center gap-4">
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
            } gap-x-4 gap-y-3 text-gray-600`}
          >
            {leftRows.map((row) => (
              <div
                key={row}
                className="flex items-center justify-center w-12 h-12 font-bold"
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
            } gap-x-4 gap-y-3`}
          >
            {Array.from(
              { length: layout.endRow - layout.startRow + 1 },
              (_, i) => layout.startRow + i
            ).map((col) =>
              leftRows.map((row) => {
                const seat = `${col}${row}`;
                const seatId = `${isPergi ? "P" : "R"}-${seat}`;
                const isAvailable = !unavailableSeats.includes(seat);
                const label = getSeatLabel(seat, isPergi);

                return (
                  <button
                    key={seatId}
                    id={seatId}
                    onClick={() => isAvailable && toggleSeat(seat, isPergi)}
                    className={`w-12 h-12 flex items-center justify-center border rounded ${
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

        <div className="flex flex-col items-center justify-center pt-12 gap-y-3">
          {Array.from(
            { length: layout.endRow - layout.startRow + 1 },
            (_, i) => layout.startRow + i
          ).map((col) => (
            <div
              key={col}
              className="flex items-center justify-center w-6 h-12 font-medium text-gray-600 border rounded-lg bg-gray-200"
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
            } gap-x-4 gap-y-3 text-gray-600`}
          >
            {rightRows.map((row) => (
              <div
                key={row}
                className="flex items-center justify-center w-12 h-12 font-bold"
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
            } gap-x-4 gap-y-3`}
          >
            {Array.from(
              { length: layout.endRow - layout.startRow + 1 },
              (_, i) => layout.startRow + i
            ).map((col) =>
              rightRows.map((row) => {
                const seat = `${col}${row}`;
                const seatId = `${isPergi ? "P" : "R"}-${seat}`;
                const isAvailable = !unavailableSeats.includes(seat);
                const label = getSeatLabel(seat, isPergi);

                return (
                  <button
                    key={seatId}
                    id={seatId}
                    onClick={() => isAvailable && toggleSeat(seat, isPergi)}
                    className={`w-12 h-12 flex items-center justify-center border rounded ${
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
      <div className="p-5 border border-gray-300">
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
            <TabPanel key="Pergi" value="Pergi">
              <div className="p-3 text-center rounded-md bg-green-500">
                <p className="text-xs font-normal text-white">
                  {seatClass} - {totalSeats} Seats available
                </p>
              </div>
              {renderSeatMap(true)}
            </TabPanel>
            <TabPanel key="Pulang" value="Pulang">
              <div className="p-3 text-center rounded-md bg-green-500">
                <p className="text-xs font-normal text-white">
                  {seatClass} - {totalSeats} Seats available
                </p>
              </div>
              {renderSeatMap(false)}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default SeatSelection;
