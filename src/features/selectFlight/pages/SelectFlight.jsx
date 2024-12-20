import MainLayout from "@/layouts/MainLayout";
import FlightSelectionHeader from "../layout/FlightSelectionHeader";
import FlightSelectionPage from "../layout/FlightSelectionPage";

export default function SelectFlight() {
  return (
    <>
      <MainLayout className="mb-0">
        <FlightSelectionHeader />
        <FlightSelectionPage />
      </MainLayout>
    </>
  );
}
