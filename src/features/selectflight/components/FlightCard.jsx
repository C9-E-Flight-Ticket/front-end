import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
} from "@material-tailwind/react";
import Icon from "./Icon";
import FlightDetail from "./FlightDetail";
import { flightDetailsData } from "../data/flightDetailsData";
import { useNavigate } from "react-router-dom";

export default function FlightCard({ flight, open, handleOpen }) {
  const priceColorClass = flight.id === 2 ? "text-red-600" : "text-purple-800";

  const navigate = useNavigate();

  return (
    <Card
      className={`w-[700px] p-[0px_15px] border-t rounded-tl-[8px] gap-[12px] transition-all ${
        open === flight.id
          ? "border-2 border-purple-100"
          : "border border-gray-200"
      }`}
    >
      <Accordion open={open === flight.id}>
        <AccordionHeader
          className="flex flex-col justify-between items-center"
          onClick={() => handleOpen(flight.id)}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-[12px]">
              <img
                src={flight.airlineLogo}
                alt="logo"
                className="w-[24px] h-[24px]"
              />
              <p className="font-medium text-[15px] leading-[18px] text-left">
                {flight.airline} - {flight.class}
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <Icon id={flight.id} open={open} />
            </div>
          </div>

          <div className="flex justify-between w-full py-15 items-center mt-4">
            <div className="text-center ps-8 flex flex-col gap-[4px]">
              <p className="text-gray-800 font-bold text-sm">
                {flight.departureTime}
              </p>
              <p className="text-gray-600 text-xs">{flight.departurePlace}</p>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <p className="text-gray-600 text-sm">{flight.duration}</p>
              <div className="flex items-center">
                <div className="w-64 h-[1px] bg-gray-400"></div>
                <img
                  src={flight.arrowIcon}
                  alt="Arrow"
                  className=" -translate-y-[4%] -translate-x-[50%] w-4 h-4"
                />
              </div>
              <p className="text-gray-600 text-xs">{flight.type}</p>
            </div>
            <div className="-translate-x-[50%] text-center flex flex-col gap-[4px]">
              <p className="text-gray-800 font-bold text-sm">
                {flight.arrivalTime}
              </p>
              <p className="text-gray-600 text-xs">{flight.arrivalPlace}</p>
            </div>
            <div>
              <img
                src={flight.baggageIcon}
                alt="Baggage Icon"
                className="-translate-x-[200%] w-4 h-4 text-purple-800"
              />
            </div>
            <div className="flex flex-col items-end gap-[8px]">
              <p className={`font-semibold ${priceColorClass}`}>
                {flight.price}
              </p>
              <div
                className="w-[100px] h-auto px-[12px] py-[4px] rounded-[12px] bg-purple-800 hover:bg-purple-900 text-white text-center cursor-pointer"
                onClick={() => navigate("/transaction")}
              >
                Pilih
              </div>
            </div>
          </div>
        </AccordionHeader>

        <AccordionBody>
          <FlightDetail
            flight={flightDetailsData.find((flight) => flight.id === 1)}
          />
        </AccordionBody>
      </Accordion>
    </Card>
  );
}
