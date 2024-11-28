import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import PaymentMethod from "@/features/transaction/components/PaymentMethod";

const PaymentPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="mx-auto">
        <CheckOutStep currentStepIndex={1} />
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <PaymentMethod />
        </div>
        <div className="w-full">
          <FlightDetail />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
