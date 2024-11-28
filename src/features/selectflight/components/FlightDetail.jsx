import React from "react";
import { flightDetailsData } from "../data/flightDetailsData.js";

const FlightDetail = ({ flight }) => {
  const flightDetails = flightDetailsData.find(
    (details) => details.id === flight.id
  );

  if (!flightDetails) {
    return <div>No flight details found</div>;
  }

  const { departureInfo, flightInfo, arrivalInfo } = flightDetails;

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold text-purple-500 mb-6">
        Detail Penerbangan
      </h2>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-2xl font-bold">{departureInfo.time}</p>
          <p className="text-sm text-gray-600">{departureInfo.date}</p>
          <p className="text-sm text-gray-600">{departureInfo.location}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Keberangkatan</p>
        </div>
      </div>

      <div className="border-t w-1/2 mx-auto mt-4 border-gray-400"></div>

      <div className="pt-4">
        <div className="flex flex-col ps-8">
          <p className="text-sm font-semibold text-gray-800">
            {flightInfo.airline} - {flightInfo.class}
          </p>
          <p className="text-lg font-bold mb-2">{flightInfo.code}</p>
        </div>

        <div className="flex items-start w-full">
          <img
            src="../public/icon-airlines.png"
            alt="Airlines"
            className="w-[24px] h-[24px] opacity-100 mr-3 mt-1"
          />
          <div className="text-sm text-gray-700">
            <p className="font-bold">Informasi:</p>
            {flightInfo.additionalDetails.map((detail) => (
              <p key={detail.id}>{detail.text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t w-1/2 mx-auto mt-4 border-gray-400"></div>

      <div className="flex justify-between items-center mt-6 pt-4">
        <div>
          <p className="text-2xl font-bold">{arrivalInfo.time}</p>
          <p className="text-sm text-gray-600">{arrivalInfo.date}</p>
          <p className="text-sm text-gray-600">{arrivalInfo.location}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Kedatangan</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
