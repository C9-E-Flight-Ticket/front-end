import { dateToTime } from "@/utils/helper";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

const SelectOrderCard = ({ selectedFlight, onClose }) => {
  const { seatClass } = useSelector((state) => state.homepage);
  if (!selectedFlight) return null;

  return (
    <Card
      className="absolute top-[17.5rem] w-[268px] h-[25 0px] shadow border bg-white opacity-100 rounded-tl-lg z-50"
      style={{ padding: "24px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-gray-800">
          Pesanan Tiket Keberangkatan
        </Typography>
        <IconButton
          variant="text"
          color="gray"
          onClick={onClose}
          className="hover:bg-gray-100"
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

      <CardBody className="p-0">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={selectedFlight.airline?.urlImage}
            alt="Airline Logo"
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold text-gray-800">
              {selectedFlight.airline?.name}
            </p>
            <p className="text-sm text-gray-600">{seatClass}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-600">Keberangkatan</p>
            <p className="font-medium text-gray-800">
              {dateToTime(selectedFlight.departureTime)} -{" "}
              {selectedFlight.departureAirport?.code}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-600">Kedatangan</p>
            <p className="font-medium text-gray-800">
              {dateToTime(selectedFlight.arrivalTime)} -{" "}
              {selectedFlight.arrivalAirport?.code}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SelectOrderCard;
