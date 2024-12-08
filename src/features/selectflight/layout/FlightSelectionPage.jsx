import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";
import TicketSold from "../components/TicketSold";
import FlightEmpty from "../components/FlightEmpty";
import LoadingTicket from "../components/LoadingTicket";
import { useSelector } from "react-redux";

export default function FlightSelectionPage() {
  const { stage } = useSelector((state) => state.flight);

  return (
    <>
      <Sorting />
      <div className="relative top-[320px] flex w-[968px] mx-auto">
        {/* <TicketSold className="mt-10 mx-auto" /> */}

        <div
          className={`fixed pt-4 -translate-x-[15%] w-[250px] ${
            stage === "departure" ? "top-[390px]" : "top-[315px]"
          }`}
        >
          <FilterCard />
        </div>

        <div className="ms-auto">
          <AccordionFlight />
        </div>

        {/* <div className="w-[80%] flex justify-center items-center h-96 ms-auto">
          <FlightEmpty />
          <LoadingTicket />
        </div> */}
      </div>
    </>
  );
}
