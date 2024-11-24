import { useState } from "react";
import DestinationFilterButton from "./DestinationFilterButton";
import FilteredDestinationCard from "./FilteredDestinationCard";

const Destination = () => {
  const continents = [
    "Semua",
    "Asia",
    "Amerika",
    "Australia",
    "Eropa",
    "Afrika",
  ];
  const [selected, setSelected] = useState("Semua");
  const from = "Jakarta";
  const destination = "Bangkok";
  const airline = "AirAsia";
  const departureDate = "20";
  const returnDate = "30 Maret 2023";
  const price = "950.000";
  const totalData = 5;

  const handleSelect = (selectedContinent) => {
    setSelected(selectedContinent);
  };

  return (
    <>
      <div className="">
        <div className="text-base font-bold">Destinasi Favorit</div>
        <div className="flex gap-4 mt-4">
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
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="flex gap-4 mt-4">
          {Array.from({ length: totalData }).map((_, index) => (
            <FilteredDestinationCard
              from={from}
              destination={destination}
              airline={airline}
              departureDate={departureDate}
              returnDate={returnDate}
              price={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Destination;
