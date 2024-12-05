import MainLayout from "@/layouts/MainLayout";
import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";
import TicketSold from "../components/TicketSold";
import FlightEmpty from "../components/FlightEmpty";
import LoadingTicket from "../components/LoadingTicket";

export default function FlightSelectionPage() {
  return (
    <>
      <Sorting />
      <div className="relative top-[320px] flex w-[968px] mx-auto">
        {/* <TicketSold className="mt-10 mx-auto" /> */}

        <div className="fixed top-[390px] pt-4 -translate-x-[15%] w-[250px]">
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
