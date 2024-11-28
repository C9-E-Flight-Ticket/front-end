import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";

export default function Transaction() {
  return (
    <>
      <MainNavbar />
      <div className="mx-auto">
        <CheckOutStep currentStepIndex={0} />
      </div>
      <div>
        <FlightDetail />
      </div>
    </>
  );
}
