import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import PaymentMethod from "@/features/transaction/components/PaymentMethod";
import NotificationBox from "../components/NotificationBox";

const PaymentPage = () => {
  return (
    <>
      <MainNavbar />
      <CheckOutStep currentStepIndex={1} />
      <NotificationBox
        className={"bg-red-500"}
        message={"Selesaikan pembayaran sampai 10 Maret 2023 12:00"}
      />
      <div className="flex justify-center ms-36">
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
