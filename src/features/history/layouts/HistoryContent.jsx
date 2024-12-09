import React, { useState } from "react";
import ticketData from "../data/flightData";
import FlightDetail from "../components/FlightDetail";
import TicketCard from "../components/TicketCard";
import HistoryButton from "../components/HistoryButton";

const HistoryContent = () => {
  const tickets = [...ticketData].reverse();
  const firstTicketId = tickets[0]?.id || 0;
  const [activeTicket, setActiveTicket] = useState(firstTicketId);

  const handleSelectTicket = (id) => {
    setActiveTicket(id) || firstTicketId;
  };

  return (
    <div className="flex justify-center">
      <div className="w-[500px] mt-[270px] mr-[50px]">
        <TicketCard onSelectTicket={handleSelectTicket} />
      </div>
      <div className="w-[346px] mt-[270px]">
        <FlightDetail selectedTicketId={activeTicket} />
      </div>
    </div>
  );
};

export default HistoryContent;
