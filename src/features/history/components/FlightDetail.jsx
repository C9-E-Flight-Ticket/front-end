import React from "react";
import ticketData from "../data/flightData";
import { Button } from "@material-tailwind/react";

const FlightDetail = ({ selectedTicketId }) => {
  const tickets = ticketData.find((ticket) => ticket.id === selectedTicketId);

  if (!tickets) {
    return <p>Ticket not found or invalid ID</p>;
  }
  const totalAdult = tickets.flightInfo.penumpang.filter(
    (passenger) => passenger.type === "adult"
  ).length;
  const totalChildren = tickets.flightInfo.penumpang.filter(
    (passenger) => passenger.type === "children"
  ).length;
  const totalBaby = tickets.flightInfo.penumpang.filter(
    (passenger) => passenger.type === "baby"
  ).length;
  const totalAdultPrice = tickets.flightInfo.penumpang
    .filter((passenger) => passenger.type === "adult")
    .reduce((sum, passenger) => sum + passenger.price, 0);
  const totalChildrenPrice = tickets.flightInfo.penumpang
    .filter((passenger) => passenger.type === "children")
    .reduce((sum, passenger) => sum + passenger.price, 0);
  const tax = 300000;
  const grandTotal = totalAdultPrice + totalChildrenPrice + tax;

  return (
    <div className="fixed">
      <div className="flex items-center">
        <p className="mb-[6px] text-[18px] font-bold ">Detail Pesanan</p>
        <div className="flex justify-end ml-auto">
          <p
            className={`w-[70px] h-[28px] my-[4px] rounded-[16px] text-[14px] font-light flex items-center justify-center text-white 
                  ${
                    tickets.payment === "Issued" ? "bg-lightGreen w-[70px]" : ""
                  }
                  ${tickets.payment === "Unpaid" ? "bg-red-500 w-[75px]" : ""}
                  ${
                    tickets.payment === "Cancelled"
                      ? "bg-gray-500 w-[96px]"
                      : ""
                  }`}
          >
            {tickets.payment === "Issued" && "Issued"}
            {tickets.payment === "Unpaid" && "Unpaid"}
            {tickets.payment === "Cancelled" && "Cancelled"}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-[10px] text-[18px]">
          Booking Code:{" "}
          <span className="font-bold text-textPurple">
            {tickets.flightInfo.bookingCode}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-base font-bold">{tickets.departureInfo.time}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">
            Keberangkatan
          </p>
        </div>
      </div>
      <p className="text-sm text-black">{tickets.departureInfo.date}</p>
      <p className="text-sm text-black">{tickets.departureInfo.airport}</p>
      <div className="pt-2 mt-4 border-t">
        <p className="ml-11 text-base font-semibold text-black">
          Jet Air - {tickets.flightInfo.class}
        </p>
        <p className="ml-11 text-base font-bold">{tickets.flightInfo.code}</p>
        <div className="mt-4 flex items-start gap-3">
          <img src="/air-asia.png" alt="AirAsia Logo" className="w-8 h-8" />
          <div>
            <p className="text-base font-bold">Informasi :</p>
            <p>Baggage 20 kg</p>
            <p>Cabin baggage 7 kg</p>
            <p>In Flight Entertainment</p>
          </div>
        </div>
      </div>
      <div className="pt-2 mt-2 flex border-t justify-between items-start">
        <div>
          <p className="text-base font-bold">{tickets.arrivalInfo.time}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-lightPurple">Kedatangan</p>
        </div>
      </div>
      <p className="text-sm text-black">{tickets.arrivalInfo.date}</p>
      <p className="text-sm text-black">{tickets.arrivalInfo.airport}</p>
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
          <p>IDR {tax.toLocaleString("id-ID")}</p>
        </div>

        <div className="mt-2 flex justify-between text-lg font-bold border-t text-textPurple">
          <p>Total</p>
          <p>IDR {grandTotal.toLocaleString("id-ID")}</p>
        </div>
      </div>
      <div className="w-[350px] h-[62px] mt-[12px] text-[20px] rounded-[12px] normal-case font-normal">
        {tickets.payment === "Cancelled" ? null : (
          <Button
            className={`w-[350px] h-[62px] mt-[12px] text-[20px] rounded-[12px] normal-case font-normal text-white ${
              tickets.payment === "Issued"
                ? "bg-textPurple"
                : tickets.payment === "Unpaid"
                ? "bg-primaryRed"
                : ""
            } `}
          >
            {tickets.payment === "Issued" && "Cetak Tiket"}
            {tickets.payment === "Unpaid" && "Lanjut Bayar"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FlightDetail;
