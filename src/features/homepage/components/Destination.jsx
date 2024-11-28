import { useState } from "react";
import DestinationFilterButton from "./DestinationFilterButton";
import FilteredDestinationCard from "./FilteredDestinationCard";

const Destination = ({ className }) => {
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
  const totalData = 12;

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
        {Array.from({ length: totalData }).map((_, index) => (
          <FilteredDestinationCard
            key={index}
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
  );
};

export default Destination;
