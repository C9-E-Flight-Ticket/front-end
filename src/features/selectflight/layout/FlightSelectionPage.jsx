import MainLayout from "@/layouts/MainLayout";
import Sorting from "../components/Sorting";
import FilterCard from "../components/FilterCard";
import AccordionFlight from "../components/AccordionFlight";

export default function FlightSelectionPage() {
  return (
    <>
      <Sorting />
      <div className="relative top-[320px] grid w-[968px] mx-auto">
        <div className="fixed top-[390px] pt-4 -translate-x-[15%] w-[250px]">
          <FilterCard />
        </div>

        <div className="justify-self-end">
          <AccordionFlight />
        </div>
      </div>
    </>
  );
}
