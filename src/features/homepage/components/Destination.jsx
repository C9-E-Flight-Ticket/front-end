import { useEffect, useRef, useState } from "react";
import Pagination from "@/features/homepage/components/Pagination";
import DestinationFilterButton from "./DestinationFilterButton";
import FilteredDestinationCard from "./FilteredDestinationCard";
import { useGetTicketByContinentQuery } from "@/services/api/flightApi";

const continents = [
  "Semua",
  "Asia",
  "North America",
  "Australia",
  "Europe",
  "Africa",
];

const Destination = ({ className }) => {
  const [selected, setSelected] = useState("Semua");
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(1);
  const limit = useRef(6);

  const { data, isLoading, error } = useGetTicketByContinentQuery(
    {
      continent: selected === "Semua" ? "" : selected,
      limit: limit.current,
      offset: offset,
    },
    { refetchOnMountOrArgChange: true }
  );

  const pagination = data?.pagination;
  const flightData = data?.payload.datas;

  useEffect(() => {
    setOffset(0);
    setActive(1);
  }, [selected]);

  const handleSelect = (selectedContinent) => {
    setSelected(selectedContinent);
  };

  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-bold">Destinasi Favorit</h1>
        <div className="flex gap-4 mt-4 flex-wrap">
          {continents.map((continent, index) => (
            <DestinationFilterButton
              key={index}
              isActive={selected === continent}
              onClick={() => handleSelect(continent)}
            >
              {continent}
            </DestinationFilterButton>
          ))}
        </div>
      </div>
      <div className="justify-start flex gap-4 mt-4 flex-wrap">
        {!isLoading &&
          !error &&
          flightData.map((flight, index) => (
            <FilteredDestinationCard
              key={flight.id}
              from={flight.departureAirport.city}
              destination={flight.arrivalAirport.city}
              airline={flight.airline.name}
              departureDate={"20"}
              returnDate={"30 Maret 2024"}
              price={flight.seats[60].price}
              image={flight.departureAirport.urlImage}
            />
          ))}
      </div>
      {!isLoading && !error && pagination.totalPages > 1 && (
        <Pagination
          className={"mx-auto mt-8"}
          limit={limit.current}
          setOffset={setOffset}
          pagination={pagination}
          active={active}
          setActive={setActive}
        />
      )}
    </div>
  );
};

export default Destination;
