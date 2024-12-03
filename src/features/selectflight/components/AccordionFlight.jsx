import React, { useState } from "react";
import FlightCard from "./FlightCard";
import SelectOrderCard from "./SelectOrderCard";
import flightData from "../data/flightData";

export default function AccordionFlight() {
  const [open, setOpen] = useState(0);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleCloseSelectedFlight = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="flex flex-col items-center space-y-5 py-5 relative">
      {flightData.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          open={open}
          handleOpen={handleOpen}
          onSelectFlight={handleSelectFlight}
        />
      ))}

      <SelectOrderCard
        selectedFlight={selectedFlight}
        onClose={handleCloseSelectedFlight}
      />
    </div>
  );
}
