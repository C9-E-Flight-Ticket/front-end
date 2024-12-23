import { useState } from "react";
import { Card } from "@material-tailwind/react";
import DataNotFound from "@/features/homepage/components/DataNotFound";

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

  const searchTerm = "GA";

  const filteredTickets = Object.keys(groupedTickets).reduce(
    (acc, monthYear) => {
      const filtered = groupedTickets[monthYear].filter((ticket) =>
        ticket.Tickets[0].seat.flight.flightNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[monthYear] = filtered;
      }
      return acc;
    },
    {}
  );

  const isEmpty = Object.keys(groupedTickets).length === 0;

  return (
    <>
      {isEmpty ? (
        <div className="lg:w-[468px] w-full flex flex-col lg:items-start items-center lg:mx-[0px] md:mx-[5px]">
          <DataNotFound />
        </div>
      ) : (
        Object.keys(groupedTickets).map((monthYear) => (
          <div
            key={monthYear}
            className="w-full flex flex-col lg:items-start items-center lg:mx-[0px] md:mx-[5px]"
          >
            <p className="my-[12px] text-[16px] font-bold">{monthYear}</p>
            {groupedTickets[monthYear].map((ticket) => (
              <Card
                key={ticket.id}
                onClick={() => handleClick(ticket.id)}
                className={`sm:w-[468px] w-[350px] sm:h-[204px] h-[120px] md:py-[12px] py-[4px] lg:px-[16px] px-[8px] mt-[8px] rounded-[10px] border-[2px] bg-white ${
                  activeTicket === ticket.id
                    ? "border-textPurple"
                    : "border-lightGray"
                }`}
                flightNumber={ticket.Tickets[0].seat.flight.flightNumber}
              >
                <p
                  className={`sm:w-[70px] w-[50px] sm:h-[28px] h-[15px] my-[4px] ml-[15px] rounded-[16px] sm:text-[14px] text-[10px] font-light flex items-center justify-center text-white 
                ${ticket.status === "Issued" ? "bg-lightGreen w-[70px]" : ""}
                ${ticket.status === "Unpaid" ? "bg-red-500 w-[75px]" : ""}
                ${
                  ticket.status === "Cancelled"
                    ? "bg-gray-500 w-fit px-3 sm:px-12"
                    : ""
                }`}
                >
                  {ticket.status === "Issued" && "Issued"}
                  {ticket.status === "Unpaid" && "Unpaid"}
                  {ticket.status === "Cancelled" && "Cancelled"}
                </p>
                <div className="flex sm:ml-[0px] ml-[10px] sm:py-[16px] py-[4px] ">
                  <div className="flex sm:w-[120px] w-[80px] sm:h-[60px] h-[40px] ">
                    <img
                      src="map.png"
                      alt="map.png"
                      className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]"
                    />
                    <div className="sm:ml-[8px] ml-[4px] text-black">
                      <p className="font-bold sm:text-[14px] text-[12px]">
                        {ticket.Tickets[0].seat.flight.departureAirport.city}
                      </p>
                      <p className="sm:text-[12px] text-[8px]">
                        {timeHandle(
                          ticket.Tickets[0].seat.flight.departureTime,
                          "date"
                        )}
                      </p>
                      <p className="sm:text-[12px] text-[8px]">
                        {timeHandle(
                          ticket.Tickets[0].seat.flight.departureTime,
                          "hour"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mx-[16px] mt-[9px] flex flex-col items-center">
                    <div className="sm:text-[12px] text-[8px] text-darkgrey ">
                      {calculateDuration(
                        ticket.Tickets[0].seat.flight.departureTime,
                        ticket.Tickets[0].seat.flight.arrivalTime
                      )}
                    </div>
                    <div>
                      <img
                        src="arrow-1.png"
                        alt="arrow-1.png"
                        className="sm:w-[164px] w-[100px]"
                      />
                    </div>
                  </div>
                  <div className="flex sm:w-[120px] w-[80px] sm:h-[60px] h-[40px]">
                    <img
                      src="map.png"
                      alt="map.png"
                      className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px]"
                    />
                    <div className="sm:ml-[8px] ml-[4px] text-black">
                      <p className="font-bold sm:text-[14px] text-[12px]">
                        {ticket.Tickets[0].seat.flight.arrivalAirport.city}
                      </p>
                      <p className="sm:text-[12px] text-[8px]">
                        {timeHandle(
                          ticket.Tickets[0].seat.flight.arrivalTime,
                          "date"
                        )}
                      </p>
                      <p className="sm:text-[12px] text-[8px]">
                        {timeHandle(
                          ticket.Tickets[0].seat.flight.arrivalTime,
                          "hour"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-[30px] flex border-t-2">
                  <div className="sm:w-[161px] w-[110px] py-[8px] ">
                    <p className="sm:text-[12px] text-[8px] font-bold text-black">
                      Booking Code:
                    </p>
                    <p className="sm:text-[12px] text-[8px] text-black">
                      {ticket.bookingCode}
                    </p>
                  </div>
                  <div className="sm:w-[161px] w-[110px] py-[8px] px-[8px] ">
                    <p className="sm:text-[12px] text-[8px] font-bold text-black">
                      Class:
                    </p>
                    <p className="sm:text-[12px] text-[8px] text-black">
                      {ticket.Tickets[0].seat.seatClass}
                    </p>
                  </div>
                  <div className="sm:w-[110px] w-[90px] py-[8px] flex items-center ">
                    <p className="sm:text-[14px] text-[10px] text-primaryPurple font-bold ">
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
        ))
      )}
    </>
  );
};

export default TicketCard;
