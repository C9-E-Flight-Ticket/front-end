import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import PaymentMethod from "@/features/transaction/components/PaymentMethod";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";

const PaymentPage = () => {
  return (
    <MainLayout className="mt-60">
      <CheckOutStep currentStepIndex={1} />
      <NotificationBox
        className={"bg-red-500"}
        message={"Selesaikan pembayaran sampai 10 Maret 2023 12:00"}
      />
      <div className="flex justify-center gap-6">
        <div className="w-[40%]">
          <PaymentMethod />
        </div>
        <div className="w-1/4">
          <FlightDetail />
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
