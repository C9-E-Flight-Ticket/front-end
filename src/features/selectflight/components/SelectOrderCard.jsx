import React from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const SelectOrderCard = ({ selectedFlight, onClose }) => {
  if (!selectedFlight) return null;

  return (
    <Card
      className="fixed top-1/2 left-32 transform -translate-y-[15%] -translate-x-[66%] w-[268px] h-[310px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] bg-white opacity-100 rounded-tl-lg z-50"
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
            src={selectedFlight.airlineLogo}
            alt="Airline Logo"
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold text-gray-800">
              {selectedFlight.airline}
            </p>
            <p className="text-sm text-gray-600">{selectedFlight.class}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-600">Keberangkatan</p>
            <p className="font-medium text-gray-800">
              {selectedFlight.departureTime} - {selectedFlight.departurePlace}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-600">Kedatangan</p>
            <p className="font-medium text-gray-800">
              {selectedFlight.arrivalTime} - {selectedFlight.arrivalPlace}
            </p>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-600">Total Harga</p>
            <p className="font-bold text-purple-800">{selectedFlight.price}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SelectOrderCard;
