import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "../components/SeatSelection";
import SaveButton from "../components/SaveButton";
import NotificationBox from "../components/NotificationBox";

export default function TransactionPage() {
  return (
    <>
      <MainNavbar />
      <CheckOutStep currentStepIndex={0} />
      <NotificationBox
        message="Selesaikan dalam"
        initialTime={900}
        className="bg-red-500"
      />
      <div className="flex justify-center ms-36">
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
