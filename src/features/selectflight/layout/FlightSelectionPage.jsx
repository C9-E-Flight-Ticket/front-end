import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";
import TicketSold from "../components/TicketSold";
import FlightEmpty from "../components/FlightEmpty";
import LoadingTicket from "../components/LoadingTicket";
import { useSelector } from "react-redux";
import { useGetTicketBySearchingQuery } from "@/services/api/flightApi";

export default function FlightSelectionPage() {
  const { stage } = useSelector((state) => state.flight);
  const {
    departureCity,
    returnCity: arrivalCity,
    flightDate,
    seatClass,
    isReturnToggleActive,
  } = useSelector((state) => state.homepage);

  const { data, isLoading, error } = useGetTicketBySearchingQuery({
    departureCity,
    arrivalCity,
    departureDate: isReturnToggleActive ? flightDate.from : flightDate,
    returnDate: isReturnToggleActive ? flightDate.to : "",
    seatClass,
    limit: 100,
    offset: 0,
  });

  const flightData = data?.payload?.datas;

  return (
    <>
      <Sorting />
      <div className="relative top-[320px] flex w-[968px] mx-auto">
        {flightData?.length == 0 && <TicketSold className="mt-10 mx-auto" />}

        <div
          className={`fixed pt-4 -translate-x-[15%] w-[250px] ${
            stage === "departure" ? "top-[390px]" : "top-[315px]"
          }`}
        >
          <FilterCard />
        </div>

        {!isLoading && flightData?.length > 0 && (
          <div className="ms-auto">
            <AccordionFlight flightData={flightData} />
          </div>
        )}
        {isLoading ? (
          <div className="w-[80%] flex justify-center items-center h-96 ms-auto">
            <LoadingTicket />
          </div>
        ) : (
          !flightData && (
            <div className="w-[80%] flex justify-center items-center h-96 ms-auto">
              <FlightEmpty />
            </div>
          )
        )}
      </div>
    </>
  );
}
