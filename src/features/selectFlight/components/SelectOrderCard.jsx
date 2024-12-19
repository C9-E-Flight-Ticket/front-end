import { dateToTime } from "@/utils/helper";
import { Card, Typography, IconButton } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const SelectOrderCard = ({ selectedFlight, onClose }) => {
  const { seatClass } = useSelector((state) => state.homepage);

  return (
    <Card
      className="relative lg:absolute lg:top-[270px] top-24 lg:left-14 lg:w-[250px] w-full bg-white shadow-lg rounded-lg z-40"
      style={{ padding: "20px 26px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-gray-900 font-semibold">
          Tiket Terpilih
        </Typography>
        <IconButton
          variant="text"
          color="gray"
          onClick={onClose}
          className="hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <img
          src={selectedFlight.airline?.urlImage}
          alt="Airline Logo"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900">
            {selectedFlight.airline?.name}
          </p>
          <p className="text-sm text-gray-600">{seatClass}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-sm text-gray-600">Keberangkatan</p>
          <p className="font-medium text-gray-900">
            {dateToTime(selectedFlight.departureTime)} -{" "}
            {selectedFlight.departureAirport?.code}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Kedatangan</p>
          <p className="font-medium text-gray-900">
            {dateToTime(selectedFlight.arrivalTime)} -{" "}
            {selectedFlight.arrivalAirport?.code}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SelectOrderCard;
