import { dateToTime } from "@/utils/helper.js";
// import { flightDetailsData } from "../data/flightDetailsData.js";
import { useSelector } from "react-redux";
const FlightDetail = ({ flight }) => {
  console.log(flight);
  const additionalDetails = [
    { id: 1, text: "No stopover" },
    { id: 2, text: "Free meal included" },
    { id: 3, text: "On-time performance: 95%" },
  ];

  const { seatClass } = useSelector((state) => state.homepage);

  if (!flight) {
    return <div>No flight details found</div>;
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold text-purple-500 mb-6">
        Detail Penerbangan
      </h2>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-2xl font-bold">
            {dateToTime(flight.departureTime)}
          </p>
          <p className="text-sm text-gray-600">
            {flight.departureTime.split("-")[0]}
          </p>
          <p className="text-sm text-gray-600">
            {flight.departureAirport?.code}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Keberangkatan</p>
        </div>
      </div>

      <div className="border-t w-1/2 mx-auto mt-4 border-gray-400"></div>

      <div className="pt-4">
        <div className="flex flex-col ps-8">
          <p className="text-sm font-semibold text-gray-800">
            {flight.airline?.name} - {seatClass}
          </p>
          <p className="text-lg font-bold mb-2">{flight.flightNumber}</p>
        </div>

        <div className="flex items-start w-full">
          <img
            src={flight.airline?.urlImage}
            alt="Airlines"
            className="w-[24px] h-[24px] opacity-100 mr-3 mt-1"
          />
          <div className="text-sm text-gray-700">
            <p className="font-bold">Informasi:</p>
            {additionalDetails.map((detail) => (
              <p key={detail.id}>{detail.text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t w-1/2 mx-auto mt-4 border-gray-400"></div>

      <div className="flex justify-between items-center mt-6 pt-4">
        <div>
          <p className="text-2xl font-bold">{dateToTime(flight.arrivalTime)}</p>
          <p className="text-sm text-gray-600">
            {flight.arrivalTime.split("-")[0]}
          </p>
          <p className="text-sm text-gray-600">{flight.arrivalAirport?.code}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Kedatangan</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
