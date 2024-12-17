import React, { useState } from "react";
import { Card } from "@material-tailwind/react";

const groupTicketsByMonth = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    const monthYear = new Date(
      ticket.Tickets[0].seat.flight.departureTime
    ).toLocaleString("default", { month: "long", year: "numeric" });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(ticket);
    return acc;
  }, {});
};

const TicketCard = ({ onSelectTicket, data }) => {
  const tickets = data;
  const firstTicketId = tickets[0]?.id || 0;
  const [activeTicket, setActiveTicket] = useState(firstTicketId);
  const groupedTickets = groupTicketsByMonth(tickets);

  const calculateTotalPrice = (tickets) => {
    return tickets.reduce((total, ticket) => {
      const price = Number(ticket.seat?.price) || 0;
      return total + price;
    }, 0);
  };

  const calculateDuration = (departure, arrival) => {
    const start = new Date(departure);
    const end = new Date(arrival);

    const diffInMs = end - start;
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  const handleClick = (id) => {
    setActiveTicket(id) || firstTicketId;
    onSelectTicket(id) || firstTicketId;
  };

  const timeHandle = (time, type) => {
    const newTime = new Date(time);

    if (type === "date") {
      return newTime.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
    if (type === "hour") {
      return newTime.toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  return (
    <div>
      {Object.keys(groupedTickets).map((monthYear) => (
        <div key={monthYear}>
          <p className="my-[12px] text-[16px] font-bold">{monthYear}</p>
          {groupedTickets[monthYear].map((ticket) => (
            <Card
              key={ticket.id}
              onClick={() => handleClick(ticket.id)}
              className={`lg:w-[468px] w-[350px] lg:h-[204px] h-[120px] lg:py-[12px] py-[4px] lg:px-[16px] px-[8px] mt-[8px] rounded-[10px] border-[2px] bg-white ${
                activeTicket === ticket.id
                  ? "border-textPurple"
                  : "border-lightGray"
              }`}
            >
              <p
                className={`lg:w-[70px] w-[50px] lg:h-[28px] h-[15px] my-[4px] ml-[15px] rounded-[16px] lg:text-[14px] text-[10px] font-light flex items-center justify-center text-white 
                  ${ticket.status === "Issued" ? "bg-lightGreen w-[70px]" : ""}
                  ${ticket.status === "Unpaid" ? "bg-red-500 w-[75px]" : ""}
                  ${
                    ticket.status === "Cancelled" ? "bg-gray-500 w-[96px]" : ""
                  }`}
              >
                {ticket.status === "Issued" && "Issued"}
                {ticket.status === "Unpaid" && "Unpaid"}
                {ticket.status === "Cancelled" && "Cancelled"}
              </p>
              <div className="flex lg:ml-[0px] ml-[10px] lg:py-[16px] py-[4px] ">
                <div className="flex lg:w-[120px] w-[80px] lg:h-[60px] h-[40px] ">
                  <img
                    src="map.png"
                    alt="map.png"
                    className="lg:w-[24px] w-[20px] lg:h-[24px] h-[20px]"
                  />
                  <div className="lg:ml-[8px] ml-[4px] text-black">
                    <p className="font-bold lg:text-[14px] text-[12px]">
                      {ticket.Tickets[0].seat.flight.departureAirport.city}
                    </p>
                    <p className="lg:text-[12px] text-[8px]">
                      {timeHandle(
                        ticket.Tickets[0].seat.flight.departureTime,
                        "date"
                      )}
                    </p>
                    <p className="lg:text-[12px] text-[8px]">
                      {timeHandle(
                        ticket.Tickets[0].seat.flight.departureTime,
                        "hour"
                      )}
                    </p>
                  </div>
                </div>
                <div className="mx-[16px] mt-[9px] flex flex-col items-center">
                  <div className="lg:text-[12px] text-[8px] text-darkgrey ">
                    {calculateDuration(
                      ticket.Tickets[0].seat.flight.departureTime,
                      ticket.Tickets[0].seat.flight.arrivalTime
                    )}
                  </div>
                  <div>
                    <img
                      src="arrow-1.png"
                      alt="arrow-1.png"
                      className="lg:w-[164px] w-[100px]"
                    />
                  </div>
                </div>
                <div className="flex lg:w-[120px] w-[80px] lg:h-[60px] h-[40px]">
                  <img
                    src="map.png"
                    alt="map.png"
                    className="lg:w-[24px] w-[20px] lg:h-[24px] h-[20px]"
                  />
                  <div className="lg:ml-[8px] ml-[4px] text-black">
                    <p className="font-bold lg:text-[14px] text-[12px]">
                      {ticket.Tickets[0].seat.flight.arrivalAirport.city}
                    </p>
                    <p className="lg:text-[12px] text-[8px]">
                      {timeHandle(
                        ticket.Tickets[0].seat.flight.arrivalTime,
                        "date"
                      )}
                    </p>
                    <p className="lg:text-[12px] text-[8px]">
                      {timeHandle(
                        ticket.Tickets[0].seat.flight.arrivalTime,
                        "hour"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-[30px] flex border-t-2">
                <div className="lg:w-[161px] w-[110px] py-[8px] ">
                  <p className="lg:text-[12px] text-[8px] font-bold text-black">
                    Booking Code:
                  </p>
                  <p className="lg:text-[12px] text-[8px] text-black">
                    {ticket.bookingCode}
                  </p>
                </div>
                <div className="lg:w-[161px] w-[110px] py-[8px] px-[8px] ">
                  <p className="lg:text-[12px] text-[8px] font-bold text-black">
                    Class:
                  </p>
                  <p className="lg:text-[12px] text-[8px] text-black">
                    {ticket.Tickets[0].seat.seatClass}
                  </p>
                </div>
                <div className="lg:w-[110px] w-[90px] py-[8px] flex items-center ">
                  <p className="lg:text-[14px] text-[10px] text-primaryPurple font-bold ">
                    IDR{" "}
                    {(
                      calculateTotalPrice(ticket.Tickets) + Number(ticket.tax)
                    ).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketCard;
