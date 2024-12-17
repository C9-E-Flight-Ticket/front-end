import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const FlightDetail = ({ selectedTicketId, data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tickets = data.find((ticket) => ticket.id === selectedTicketId);
  console.log(selectedTicketId);

  const timeHandle = (time, type) => {
    const newTime = new Date(time);

    if (type === "date") {
      return newTime.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
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

  if (!tickets) {
    return <p>Ticket not found or invalid ID</p>;
  }
  const totalAdult = tickets.Tickets.filter(
    (passenger) => passenger.category === "Adult"
  ).length;
  const totalChildren = tickets.Tickets.filter(
    (passenger) => passenger.category === "Children"
  ).length;
  const totalBaby = tickets.Tickets.filter(
    (passenger) => passenger.category === "Baby"
  ).length;
  const totalAdultPrice = tickets.Tickets.filter(
    (passenger) => passenger.category === "Adult"
  ).reduce((sum, passenger) => sum + (Number(passenger.seat.price) || 0), 0);

  const totalChildrenPrice = tickets.Tickets.filter(
    (passenger) => passenger.category === "Children"
  ).reduce((sum, passenger) => sum + (Number(passenger.seat.price) || 0), 0);

  const total = totalChildrenPrice + totalAdultPrice;

  console.log("departure", tickets.Tickets[0].seat.flight.departureTime);

  return (
    <div>
      <div className="fixed bottom-[0px] w-full p-2 bg-white lg:hidden md:hidden">
        <Button
          onClick={() => setIsVisible(!isVisible)}
          className="w-full bg-lightPurple text-white"
        >
          {isVisible ? "Sembunyikan Detail" : "Tampilkan Detail"}
        </Button>
      </div>
      <div
        className={`fixed bottom-[60px] left-0 right-0 lg:left-auto lg:right-auto lg:bottom-auto md:left-auto md:right-auto md:bottom-auto w-full lg:w-[346px] md:w-[346px] bg-white border-t-2 lg:border-0 md:border-0 border-lightPurple ${
          isVisible ? "block" : "hidden"
        } sm:block lg:block md:block`}
      >
        <div className="flex items-center lg:mt-[5px] md:mt-[5px] mt-[5px]">
          <p className="lg:ml-[0px] md:ml-[0px] ml-[4px] lg:mb-[6px] md:mb-[6px] lg:text-[18px] md:text-[18px] text-[14px] font-bold ">
            Detail Pesanan
          </p>
          <div className="flex justify-end ml-auto">
            <p
              className={`lg:w-[70px] md:w-[70px] w-[40px] lg:h-[28px] md:h-[28px] h-[20px] my-[4px] rounded-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-light flex items-center justify-center text-white 
                ${tickets.status === "Issued" ? "bg-lightGreen w-[70px]" : ""}
                ${tickets.status === "Unpaid" ? "bg-red-500 w-[75px]" : ""}
                ${
                  tickets.status === "Cancelled" ? "bg-gray-500 w-[96px]" : ""
                }`}
            >
              {tickets.status === "Issued" && "Issued"}
              {tickets.status === "Unpaid" && "Unpaid"}
              {tickets.status === "Cancelled" && "Cancelled"}
            </p>
          </div>
        </div>
        <div>
          <p className="lg:ml-[0px] md:ml-[0px] ml-[4px] lg:mb-[10px] md:mb-[10px] lg:text-[18px] md:text-[18px] text-[12px]">
            Booking Code:{" "}
            <span className="font-bold text-textPurple">
              {tickets.bookingCode}
            </span>
          </p>
        </div>
        <div className="lg:mx-[0px] md:mx-[0px] mx-[5px] flex justify-between items-start">
          <div>
            <p className="lg:text-sm md:text-sm text-[10px] font-bold">
              {timeHandle(tickets.Tickets[0].seat.flight.departureTime, "hour")}
            </p>
          </div>
          <div className="text-right">
            <p className="lg:text-sm md:text-sm text-[10px] font-semibold text-lightPurple">
              Keberangkatan
            </p>
          </div>
        </div>
        <p className="lg:ml-[0px] md:ml-[0px] ml-[5px] lg:text-sm md:text-sm text-[10px] text-black">
          {timeHandle(tickets.Tickets[0].seat.flight.departureTime, "date")}
        </p>
        <p className="lg:ml-[0px] md:ml-[0px] ml-[5px] lg:text-sm md:text-sm text-[10px] text-black">
          {tickets.Tickets[0].seat.flight.departureAirport.city}
        </p>
        <div className="pt-2 lg:mt-4 md:mt-4 border-t">
          <p className="ml-11 lg:text-sm md:text-sm text-[10px] font-semibold text-black">
            {tickets.Tickets[0].seat.flight.airline.name} -{" "}
            {tickets.Tickets[0].seat.seatClass}
          </p>
          <p className="ml-11 lg:text-sm md:text-sm text-[10px] font-bold">
            {tickets.Tickets[0].seat.flight.flightNumber}
          </p>
          <div className="lg:mt-4 md:mt-4 flex items-start gap-3">
            <img
              src={tickets.Tickets[0].seat.flight.airline.urlImage}
              alt="Logo"
              className="lg:w-[24px] md:w-[24px] w-[18px] lg:h-[24px] md:h-[24px] h-[18px] lg:ml-[0px] md:ml-[0px] ml-[14px]"
            />
            <div>
              <p className="lg:text-sm md:text-sm text-[10px] font-bold">
                Informasi :
              </p>
              <p className="lg:text-sm md:text-sm text-[10px]">
                Baggage {tickets.Tickets[0].seat.flight.airline.baggage} kg
              </p>
              <p className="lg:text-sm md:text-sm text-[10px]">
                Cabin baggage{" "}
                {tickets.Tickets[0].seat.flight.airline.cabinBaggage} kg
              </p>
              <p className="lg:text-sm md:text-sm text-[10px]">
                {tickets.Tickets[0].seat.flight.airline.entertainment}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mx-[0px] md:mx-[0px] mx-[5px] pt-2 lg:mt-2 md:mt-2 flex border-t justify-between items-start">
          <div>
            <p className="lg:text-sm md:text-sm text-[10px] font-bold">
              {timeHandle(tickets.Tickets[0].seat.flight.arrivalTime, "hour")}
            </p>
          </div>
          <div className="text-right">
            <p className="lg:text-sm md:text-sm text-[10px] font-semibold text-lightPurple">
              Kedatangan
            </p>
          </div>
        </div>
        <p className="lg:ml-[0px] md:ml-[0px] ml-[5px] lg:text-sm md:text-sm text-[10px] text-black">
          {timeHandle(tickets.Tickets[0].seat.flight.arrivalTime, "date")}
        </p>
        <p className="lg:ml-[0px] md:ml-[0px] ml-[5px] lg:text-sm md:text-sm text-[10px] text-black">
          {tickets.Tickets[0].seat.flight.arrivalAirport.city}
        </p>
        <div className="lg:mt-2 md:mt-2 ml-3 border-t">
          <h3 className="lg:text-base md:text-base text-[14px] font-semibold text-black lg:mb-2 md:mb-2">
            Rincian Harga
          </h3>
          {totalAdult ? (
            <div className="flex justify-between lg:text-sm md:text-sm lg:mr-[0px] md:mr-[0px] mr-[5px] text-[10px] text-black">
              <p>{totalAdult} Adults</p>
              <p>IDR {totalAdultPrice.toLocaleString("id-ID")}</p>
            </div>
          ) : (
            ""
          )}
          {totalChildren ? (
            <div className="flex justify-between lg:text-sm md:text-sm text-[10px] lg:mr-[0px] md:mr-[0px] mr-[5px] text-black">
              <p>{totalChildren} Child</p>
              <p>IDR {totalChildrenPrice.toLocaleString("id-ID")}</p>
            </div>
          ) : (
            ""
          )}
          {totalBaby ? (
            <div className="flex justify-between lg:text-sm md:text-sm text-[10px] lg:mr-[0px] md:mr-[0px] mr-[5px] text-black">
              <p>{totalBaby} Baby</p>
              <p>IDR 0</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between lg:text-sm md:text-sm text-[10px] lg:mr-[0px] md:mr-[0px] mr-[5px] text-black">
            <p>Tax</p>
            <p>IDR {tickets.tax.toLocaleString("id-ID")}</p>
          </div>

          <div className="mt-2 lg:mr-[0px] md:mr-[0px] mr-[5px] flex justify-between lg:text-lg md:text-lg text-[12px] font-bold border-t text-textPurple">
            <p>Total</p>
            <p> IDR {(total + Number(tickets.tax)).toLocaleString("id-ID")}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-[350px] lg:h-[62px] md:h-[62px] h-[35px] lg:mt-[12px] md:mt-[12px] mt-[5px] lg:text-[20px] md:text-[20px] text-[15px]">
            {tickets.status === "Cancelled" ? null : (
              <Button
                className={`flex justify-center items-center w-[350px] lg:h-[62px] md:h-[62px] h-[35px] lg:mt-[12px] md:mt-[12px] mt-[5px] lg:text-[20px] md:text-[20px] text-[15px] rounded-[12px] normal-case font-normal text-white ${
                  tickets.status === "Issued"
                    ? "bg-textPurple"
                    : tickets.status === "Unpaid"
                    ? "bg-primaryRed"
                    : ""
                } `}
              >
                {tickets.status === "Issued" && "Cetak Tiket"}
                {tickets.status === "Unpaid" && "Lanjut Bayar"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
