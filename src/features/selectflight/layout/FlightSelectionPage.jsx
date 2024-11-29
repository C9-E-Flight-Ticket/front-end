import MainLayout from "@/layouts/MainLayout";
import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";

export default function FlightSelectionPage() {
  return (
    <>
      <Sorting />
      <div className="absolute top-[400px] left-1/2 transform -translate-x-[52%] flex w-[968px]">
        <div className=" top-[400px] pt-4 -translate-x-[15%] w-[250px]">
          <FilterCard />
        </div>

        <div className="flex-grow">
          <AccordionFlight />
        </div>
      </div>
    </>
  );
}
