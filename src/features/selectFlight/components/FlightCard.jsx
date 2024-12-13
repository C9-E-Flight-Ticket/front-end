import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
} from "@material-tailwind/react";
import Icon from "./Icon";
import FlightDetail from "./FlightDetail";
import { useSelector } from "react-redux";
import { dateToTime, formatNumberToRupiah } from "@/utils/helper";

export default function FlightCard({
  flight,
  open,
  handleOpen,
  onSelectFlight,
}) {
  const { seatClass } = useSelector((state) => state.homepage);

  const priceColorClass = flight.id === 2 ? "text-red-600" : "text-purple-800";

  const handleSelectTicket = (e) => {
    e.stopPropagation();
    if (onSelectFlight) {
      onSelectFlight(flight);
    }
  };

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
                src={flight.airline?.urlImage}
                alt="logo"
                className="w-[24px] h-[24px]"
              />
              <p className="font-medium text-[15px] leading-[18px] text-left">
                {flight.airline?.name} - {seatClass}
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <Icon id={flight.id} open={open} />
            </div>
          </div>

          <div className="flex justify-between w-full py-15 items-center mt-4">
            <div className="text-center ps-8 flex flex-col gap-[4px]">
              <p className="text-gray-800 font-bold text-sm">
                {dateToTime(flight.departureTime)}
              </p>
              <p className="text-gray-600 text-xs">
                {flight.departureAirport?.code}
              </p>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <p className="text-gray-600 text-sm">{"3h 15m"}</p>
              <div className="flex items-center">
                <div className="w-64 h-[1px] bg-gray-400"></div>
                <img
                  src="/icon-arrow-right.png"
                  alt="Arrow"
                  className=" -translate-y-[4%] -translate-x-[50%] w-3 h-3"
                />
              </div>
              <p className="text-gray-600 text-xs">{"Direct"}</p>
            </div>
            <div className="-translate-x-[50%] text-center flex flex-col gap-[4px]">
              <p className="text-gray-800 font-bold text-sm">
                {dateToTime(flight.arrivalTime)}
              </p>
              <p className="text-gray-600 text-xs">
                {flight.arrivalAirport?.code}
              </p>
            </div>
            <div>
              <img
                src="/Icon-baggage.png"
                alt="Baggage Icon"
                className="-translate-x-[200%] w-4 h-4 text-purple-800"
              />
            </div>
            <div className="flex flex-col items-end gap-[8px]">
              <p className={`font-semibold ${priceColorClass}`}>
                {formatNumberToRupiah(1000000)}
              </p>
              <div
                className="w-[100px] h-auto px-[12px] py-[4px] rounded-[12px] bg-purple-800 hover:bg-purple-900 text-white text-center cursor-pointer"
                onClick={handleSelectTicket}
              >
                Pilih
              </div>
            </div>
          </div>
        </AccordionHeader>

        <AccordionBody>
          <FlightDetail flight={flight} />
        </AccordionBody>
      </Accordion>
    </Card>
  );
}
