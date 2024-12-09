import { useState } from "react";
import FlightCard from "./FlightCard";
import SelectOrderCard from "./SelectOrderCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFlightStage } from "@/services/flightSlice";

export default function AccordionFlight({ flightData }) {
  const { stage } = useSelector((state) => state.flight);
  const { isReturnToggleActive } = useSelector((state) => state.homepage);

  const [open, setOpen] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  const handleSelectDeparture = (flight) => {
    setSelectedDeparture(flight);
    setOpen(null);
    isReturnToggleActive
      ? dispatch(changeFlightStage())
      : navigate("/transaction");
  };

  const handleSelectReturn = (flight) => {
    setSelectedReturn(flight);
    dispatch(changeFlightStage());
    navigate("/transaction", {
      // state: {
      //   departureFlight: selectedDeparture,
      //   returnFlight: flight,
      // },
    });
  };

  const handleReset = () => {
    dispatch(changeFlightStage("departure"));
    setSelectedDeparture(null);
    setSelectedReturn(null);
    setOpen(null);
  };

  // const currentFlightData =
  //   stage === "departure" ? flightData : returnFlightData;

  return (
    <div className="flex flex-col items-center space-y-5 py-5 relative">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">
          {stage === "departure"
            ? "Pilih Tiket Keberangkatan"
            : "Pilih Tiket Kepulangan"}
        </h2>
      </div>
      {flightData.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          open={open}
          handleOpen={handleOpen}
          onSelectFlight={
            stage === "departure" ? handleSelectDeparture : handleSelectReturn
          }
        />
      ))}

      <SelectOrderCard
        selectedFlight={selectedDeparture || selectedReturn}
        onClose={handleReset}
      />
    </div>
  );
}
