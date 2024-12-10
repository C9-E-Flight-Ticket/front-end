import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";
import TicketSold from "../components/TicketSold";
import FlightEmpty from "../components/FlightEmpty";
import LoadingTicket from "../components/LoadingTicket";
import { useDispatch, useSelector } from "react-redux";
import { useGetTicketBySearchingQuery } from "@/services/api/flightApi";
import { useState } from "react";
import { changeFlightStage } from "@/services/flightSlice";
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

  if (!flightDate) navigate("/");

  const [accordionOpen, setAccordionOpen] = useState(null);
  const [selectedDepartureFlight, setSelectedDepartureFlight] = useState(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);

  const flightData = data?.payload?.datas;

  const handleOpen = (value) => {
    setAccordionOpen(accordionOpen === value ? null : value);
  };

  const handleReset = () => {
    dispatch(changeFlightStage("departure"));
    dispatch(switchSearchCity());
    setSelectedDepartureFlight(null);
    setSelectedReturnFlight(null);
    setAccordionOpen(null);
  };

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
          <SelectOrderCard
            selectedFlight={selectedDepartureFlight}
            onClose={handleReset}
          />
        </div>

        {!isLoading && flightData?.length > 0 && !isError && !isFetching && (
          <div className="ms-auto">
            <AccordionFlight
              flightData={flightData}
              handleOpen={handleOpen}
              setOpen={setAccordionOpen}
              open={accordionOpen}
              setSelectedDepartureFlight={setSelectedDepartureFlight}
              setSelectedReturnFlight={setSelectedReturnFlight}
            />
          </div>
        )}
        {isLoading || isFetching ? (
          <div className="w-[80%] flex justify-center items-center h-96 ms-auto">
            <LoadingTicket />
          </div>
        ) : (
          isError && (
            <div className="w-[80%] flex justify-center items-center h-96 ms-auto">
              <FlightEmpty />
            </div>
          )
        )}
      </div>
    </>
  );
}
