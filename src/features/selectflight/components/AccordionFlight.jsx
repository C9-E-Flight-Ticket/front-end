import { useState } from "react";
import FlightCard from "./FlightCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFlightStage } from "@/services/flightSlice";
import { switchSearchCity } from "@/services/homepageSlice";

export default function AccordionFlight({
  flightData,
  setSelectedDepartureFlight,
  setSelectedReturnFlight,
  setOpen,
  handleOpen,
  open,
}) {
  const { stage } = useSelector((state) => state.flight);
  const { isReturnToggleActive } = useSelector((state) => state.homepage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectDeparture = (flight) => {
    setSelectedDepartureFlight(flight);
    setOpen(null);
    isReturnToggleActive
      ? dispatch(changeFlightStage())
      : navigate("/transaction");
    dispatch(switchSearchCity());
  };

  const handleSelectReturn = (flight) => {
    setSelectedReturnFlight(flight);
    dispatch(changeFlightStage());
    navigate("/transaction", {
      // state: {
      //   departureFlight: selectedDeparture,
      //   returnFlight: flight,
      // },
    });
  };

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
    </div>
  );
}
