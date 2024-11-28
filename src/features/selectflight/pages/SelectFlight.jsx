import AccordionFlight from "../components/AccordionFlight";
import FilterCard from "../components/FilterCard";
import SelectFlightButton from "../components/SelectFlightButton";
import Sorting from "../components/Sorting";
import MainLayout from "@/layouts/MainLayout";
import FlightSelectionHeader from "../layout/FlightSelectionHeader";
import FlightSelectionPage from "../layout/FlightSelectionPage";
import Header from "../layout/FlightSelectionHeader";
import Body from "../layout/FlightSelectionPage";

export default function SelectFlight() {
  return (
    <>
      <MainLayout>
        <FlightSelectionHeader />
        <FlightSelectionPage />
      </MainLayout>
    </>
  );
}
