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

  const handleSelectTicket = (e) => {
    e.stopPropagation();
    if (onSelectFlight) {
      onSelectFlight(flight);
    }
  };

  return (
    <Card
      className={`w-full lg:w-[700px] p-[0px_15px] border-t rounded-tl-[8px] gap-[12px] transition-all ${
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
          <div className="flex flex-wrap lg:flex-nowrap justify-between w-full items-center mt-2 lg:mt-4 gap-4">
            <div className="text-center lg:ps-8  flex flex-col gap-1">
              <p className="text-gray-800 font-bold text-sm">
                {dateToTime(flight.departureTime)}
              </p>
              <p className="text-gray-600 text-xs">
                {flight.departureAirport?.code}
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-600 text-sm">{"3h 15m"}</p>
              <div className="flex items-center">
                <div className="w-32 lg:w-64 h-[1px] bg-gray-400"></div>
                <img
                  src="/icon-arrow-right.png"
                  alt="Arrow"
                  className="w-3 h-3 -translate-y-[4%] -translate-x-[50%]"
                />
              </div>
              <p className="text-gray-600 text-xs">{"Direct"}</p>
            </div>
            <div className="lg:-translate-x-[50%] text-center flex flex-col gap-1">
              <p className="text-gray-800 font-bold text-sm">
                {dateToTime(flight.arrivalTime)}
              </p>
              <p className="text-gray-600 text-xs">
                {flight.arrivalAirport?.code}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Icon-baggage.png"
                alt="Baggage Icon"
                className="lg:-translate-x-[200%] w-4 h-4 text-purple-800"
              />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className={`font-semibold text-purple-800`}>
                {formatNumberToRupiah(1000000)}
              </p>
              <div
                className="w-[100px] px-4 py-2 rounded-[12px] bg-purple-800 hover:bg-purple-900 text-white text-center cursor-pointer"
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
