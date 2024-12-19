import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";
import TicketSold from "../components/TicketSold";
import FlightEmpty from "../components/FlightEmpty";
import LoadingTicket from "../components/LoadingTicket";
import { useDispatch, useSelector } from "react-redux";
import { useGetTicketBySearchingQuery } from "@/services/api/flightApi";
import { useEffect, useState } from "react";
import { resetFlightState } from "@/services/flightSlice";
import SelectOrderCard from "../components/SelectOrderCard";
import { switchSearchCity } from "@/services/homepageSlice";
import { useNavigate } from "react-router-dom";

export default function FlightSelectionPage() {
  const { stage } = useSelector((state) => state.flight);
  const {
    departureCity,
    returnCity: arrivalCity,
    flightDate,
    seatClass,
    isReturnToggleActive,
  } = useSelector((state) => state.homepage);

  const { data, isLoading, isError, isFetching } = useGetTicketBySearchingQuery(
    {
      departureCity,
      arrivalCity,
      departureDate: isReturnToggleActive
        ? stage == "departure"
          ? flightDate.from
          : flightDate.to
        : flightDate,
      returnDate: isReturnToggleActive ? flightDate.to : "",
      seatClass,
      limit: 100,
      offset: 0,
    },
    { refetchOnMountOrArgChange: true }
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!flightDate) navigate("/");
  }, [flightDate, navigate]);

  const [accordionOpen, setAccordionOpen] = useState(null);
  const [selectedDepartureFlight, setSelectedDepartureFlight] = useState(null);

  const flightData = data?.payload?.data;

  function handleOpen(value) {
    setAccordionOpen(accordionOpen === value ? null : value);
  }

  function handleReset() {
    if (stage == "return") dispatch(switchSearchCity());

    dispatch(resetFlightState());
    setSelectedDepartureFlight(null);
    setAccordionOpen(null);
  }

  return (
    <>
      <Sorting />
      <div className="relative flex flex-col lg:flex-row top-[230px] lg:top-[320px] w-full max-w-screen-xl mx-auto px-4 lg:px-0 gap-6">
        <div
          className={`relative lg:fixed lg:pt-4 w-full lg:w-[250px] ${
            stage === "departure" ? "lg:top-[390px]" : "lg:top-[315px]"
          }`}
        >
          <FilterCard />
          {selectedDepartureFlight && (
            <SelectOrderCard
              selectedFlight={selectedDepartureFlight}
              onClose={handleReset}
            />
          )}
        </div>

        <div className="flex-grow mt-8 lg:mt-0 lg:pl-[250px]">
          {flightData?.length === 0 && <TicketSold className="mt-10 mx-auto" />}
          {!isLoading && flightData?.length > 0 && !isError && !isFetching && (
            <AccordionFlight
              flightData={flightData}
              handleOpen={handleOpen}
              setOpen={setAccordionOpen}
              open={accordionOpen}
              setSelectedDepartureFlight={setSelectedDepartureFlight}
            />
          )}
          {(isLoading || isFetching) && (
            <div className="flex justify-center items-center h-96">
              <LoadingTicket />
            </div>
          )}
          {isError && (
            <div className="flex justify-center items-center h-96">
              <FlightEmpty />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
