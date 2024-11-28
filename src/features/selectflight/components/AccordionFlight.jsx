import React from "react";
import FlightCard from "./FlightCard";
import flightData from "../data/flightData";

export default function AccordionFlight() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-col items-center space-y-5 py-5">
      {flightData.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          open={open}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}
