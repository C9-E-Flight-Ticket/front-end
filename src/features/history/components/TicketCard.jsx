import React, { useState } from "react";
import ticketData from "../data/flightData";
import { Button, Card } from "@material-tailwind/react";

const groupTicketsByMonth = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    const monthYear = new Date(ticket.departureInfo.date).toLocaleString(
      "default",
      { month: "long", year: "numeric" }
    );
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(ticket);
    return acc;
  }, {});
};

const TicketCard = ({ onSelectTicket }) => {
  const tickets = [...ticketData].reverse();
  const firstTicketId = tickets[0]?.id || 0;
  const [activeTicket, setActiveTicket] = useState(firstTicketId);
  const groupedTickets = groupTicketsByMonth(tickets);

  const calculateTotalPrice = (penumpang) => {
    return penumpang.reduce((total, { price }) => total + price, 0);
  };

  const handleClick = (id) => {
    setActiveTicket(id) || firstTicketId;
    onSelectTicket(id) || firstTicketId;
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
              className={`w-[468px] h-[204px] py-[12px] px-[16px] mt-[8px] rounded-[10px] border-[2px] bg-white ${
                activeTicket === ticket.id
                  ? "border-textPurple"
                  : "border-lightGray"
              }`}
            >
              <p
                className={`w-[70px] h-[28px] my-[4px] rounded-[16px] text-[14px] font-light flex items-center justify-center text-white 
                  ${ticket.payment === "Issued" ? "bg-lightGreen w-[70px]" : ""}
                  ${ticket.payment === "Unpaid" ? "bg-red-500 w-[75px]" : ""}
                  ${
                    ticket.payment === "Cancelled" ? "bg-gray-500 w-[96px]" : ""
                  }`}
              >
                {ticket.payment === "Issued" && "Issued"}
                {ticket.payment === "Unpaid" && "Unpaid"}
                {ticket.payment === "Cancelled" && "Cancelled"}
              </p>
              <div className="flex py-[16px]">
                <div className="flex w-[120px] h-[60px]">
                  <img
                    src="map.png"
                    alt="map.png"
                    className="w-[24px] h-[24px]"
                  />
                  <div className=" ml-[8px] text-black">
                    <p className="font-bold text-[14px]">
                      {ticket.departureInfo.location}
                    </p>
                    <p className="text-[12px]">{ticket.departureInfo.date}</p>
                    <p className="text-[12px]">{ticket.departureInfo.time}</p>
                  </div>
                </div>
                <div className="mx-[16px] flex items-center">
                  <div>
                    <p></p>
                    <img
                      src="arrow-1.png"
                      alt="arrow-1.png"
                      className="w-[164px]"
                    />
                  </div>
                </div>
                <div className="flex w-[120px] h-[60px]">
                  <img
                    src="map.png"
                    alt="map.png"
                    className="w-[24px] h-[24px]"
                  />
                  <div className=" ml-[8px] text-black">
                    <p className="font-bold text-[14px]">
                      {ticket.arrivalInfo.location}
                    </p>
                    <p className="text-[12px]">{ticket.departureInfo.date}</p>
                    <p className="text-[12px]">{ticket.departureInfo.time}</p>
                  </div>
                </div>
              </div>
              <div className="flex border-t-2">
                <div className="w-[161px] h[36px] py-[8px] ">
                  <p className="text-[12px] font-bold text-black">
                    Booking Code:
                  </p>
                  <p className="text-[12px] text-black">
                    {ticket.flightInfo.bookingCode}
                  </p>
                </div>
                <div className="w-[161px] h[36px] py-[8px] px-[8px] ">
                  <p className="text-[12px] font-bold text-black">Class:</p>
                  <p className="text-[12px] text-black">
                    {ticket.flightInfo.class}
                  </p>
                </div>
                <div className="w-[100px] h-[36x] py-[8px] flex items-center ">
                  <p className="text-[14px] text-primaryPurple font-bold ">
                    IDR {calculateTotalPrice(ticket.flightInfo.penumpang)}
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
