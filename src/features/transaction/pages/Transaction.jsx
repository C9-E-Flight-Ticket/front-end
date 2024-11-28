import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "../components/SeatSelection";

export default function Transaction() {
  return (
    <>
      <MainNavbar />
      <div className="mx-auto">
        <CheckOutStep currentStepIndex={0} />
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div>
            <SeatSelection className="w-full" />
          </div>
          <div>
            <FlightDetail className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
