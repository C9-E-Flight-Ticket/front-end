import React from "react";
import { Button } from "@material-tailwind/react";

const FlightDetail = ({ selectedTicketId, data }) => {
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
    <div className="fixed hidden md:block sm:block">
      <div className="flex items-center">
        <p className="mb-[6px] text-[18px] font-bold ">Detail Pesanan</p>
        <div className="flex justify-end ml-auto">
          <p
            className={`w-[70px] h-[28px] my-[4px] rounded-[16px] text-[14px] font-light flex items-center justify-center text-white 
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
        <p className="mb-[10px] text-[18px]">
          Booking Code:{" "}
          <span className="font-bold text-textPurple">
            {tickets.bookingCode}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-base font-bold">
            {timeHandle(tickets.Tickets[0].seat.flight.departureTime, "hour")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">
            Keberangkatan
          </p>
        </div>
      </div>
      <p className="text-sm text-black">
        {timeHandle(tickets.Tickets[0].seat.flight.departureTime, "date")}
      </p>
      <p className="text-sm text-black">
        {tickets.Tickets[0].seat.flight.departureAirport.city}
      </p>
      <div className="pt-2 mt-4 border-t">
        <p className="ml-11 text-base font-semibold text-black">
          {tickets.Tickets[0].seat.flight.airline.name} -{" "}
          {tickets.Tickets[0].seat.seatClass}
        </p>
        <p className="ml-11 text-base font-bold">
          {tickets.Tickets[0].seat.flight.flightNumber}
        </p>
        <div className="mt-4 flex items-start gap-3">
          <img
            src={tickets.Tickets[0].seat.flight.airline.urlImage}
            alt="Logo"
            className="w-8 h-8"
          />
          <div>
            <p className="text-base font-bold">Informasi :</p>
            <p>Baggage {tickets.Tickets[0].seat.flight.airline.baggage} kg</p>
            <p>
              Cabin baggage{" "}
              {tickets.Tickets[0].seat.flight.airline.cabinBaggage} kg
            </p>
            <p>{tickets.Tickets[0].seat.flight.airline.entertainment}</p>
          </div>
        </div>
      </div>
      <div className="pt-2 mt-2 flex border-t justify-between items-start">
        <div>
          <p className="text-base font-bold">
            {timeHandle(tickets.Tickets[0].seat.flight.arrivalTime, "hour")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">Kedatangan</p>
        </div>
      </div>
      <p className="text-sm text-black">
        {timeHandle(tickets.Tickets[0].seat.flight.arrivalTime, "date")}
      </p>
      <p className="text-sm text-black">
        {tickets.Tickets[0].seat.flight.arrivalAirport.city}
      </p>
      <div className="pt-2 mt-2 ml-3 border-t">
        <h3 className="text-base font-semibold text-black mb-2">
          Rincian Harga
        </h3>
        {totalAdult ? (
          <div className="flex justify-between text-sm text-black">
            <p>{totalAdult} Adults</p>
            <p>IDR {totalAdultPrice.toLocaleString("id-ID")}</p>
          </div>
        ) : (
          ""
        )}
        {totalChildren ? (
          <div className="flex justify-between text-sm text-black">
            <p>{totalChildren} Child</p>
            <p>IDR {totalChildrenPrice.toLocaleString("id-ID")}</p>
          </div>
        ) : (
          ""
        )}
        {totalBaby ? (
          <div className="flex justify-between text-sm text-black">
            <p>{totalBaby} Baby</p>
            <p>IDR 0</p>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-between text-sm text-black">
          <p>Tax</p>
          <p>IDR {tickets.tax.toLocaleString("id-ID")}</p>
        </div>

        <div className="mt-2 flex justify-between text-lg font-bold border-t text-textPurple">
          <p>Total</p>
          <p> IDR {(total + Number(tickets.tax)).toLocaleString("id-ID")}</p>
        </div>
      </div>
      <div className="w-[350px] h-[62px] mt-[12px] text-[20px] rounded-[12px] normal-case font-normal">
        {tickets.status === "Cancelled" ? null : (
          <Button
            className={`w-[350px] h-[62px] mt-[12px] text-[20px] rounded-[12px] normal-case font-normal text-white ${
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
  );
};

export default FlightDetail;
