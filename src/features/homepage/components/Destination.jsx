import { useEffect, useRef, useState } from "react";
import Pagination from "@/features/homepage/components/Pagination";
import DestinationFilterButton from "./DestinationFilterButton";
import FilteredDestinationCard from "./FilteredDestinationCard";
import { useGetTicketByContinentQuery } from "@/services/api/flightApi";
import DataNotFound from "./DataNotFound";
import DestinationSkeleton from "./DestinationSkeleton";
import { formatNumberToRupiah } from "@/utils/helper";

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
  const [currPage, setCurrPage] = useState(1);
  const limit = useRef(7);
  const skeletonCount = useRef(7);

  const { data, isLoading, error, isFetching } = useGetTicketByContinentQuery(
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
    setCurrPage(1);
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

      {isLoading || isFetching ? (
        <div className={"justify-start grid grid-cols-7 gap-4 mt-4"}>
          {Array.from({ length: skeletonCount.current }).map((_, i) => (
            <DestinationSkeleton key={i} />
          ))}
        </div>
      ) : error || pagination.totalItems == 0 ? (
        <DataNotFound />
      ) : (
        <div className={"justify-start grid grid-cols-7 gap-4 mt-4"}>
          {flightData.map((flight, index) => (
            <FilteredDestinationCard
              key={flight.id}
              from={flight.departureAirport.city}
              destination={flight.arrivalAirport.city}
              airline={flight.airline.name}
              departureDate={"20"}
              returnDate={"30 Maret 2024"}
              price={formatNumberToRupiah(flight.seats[0]?.price)}
              image={flight.departureAirport.urlImage}
            />
          ))}
        </div>
      )}

      {!isLoading && !error && pagination.totalPages > 1 && (
        <Pagination
          className={"mx-auto mt-8"}
          limit={limit.current}
          setOffset={setOffset}
          pagination={pagination}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      )}
    </div>
  );
};

export default Destination;
