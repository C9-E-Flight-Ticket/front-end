import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "../components/SeatSelection";
import SaveButton from "../components/SaveButton";

export default function TransactionPage() {
  return (
    <>
      <MainNavbar />
      <div className="mx-auto">
        <CheckOutStep currentStepIndex={0} />
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-end">
            <SeatSelection />
          </div>
          <SaveButton />
        </div>
        <div className="w-full">
          <FlightDetail />
        </div>
      </div>
    </>
  );
}
