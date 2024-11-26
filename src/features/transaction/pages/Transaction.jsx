import MainNavbar from "@/components/MainNavbar/MainNavbar";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import PaymentButton from "@/features/transaction/components/PaymentButton";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";

export default function Transaction() {
  return (
    <>
      <MainNavbar />
      <div className="max-w-6xl mx-auto mt-4">
        <CheckOutStep currentStep="Isi Data Diri" />
      </div>
      <div>
        <FlightDetail />
      </div>
    </>
  );
}
