import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
// import PaymentMethod from "@/features/transaction/components/PaymentMethod";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";
import useMidtransEmbed from "@/hooks/useMidtransEmbed";

const PaymentPage = () => {
  function handleSuccess(result) {
    alert("payment success!");
    console.log(result);
  }
  function handlePending(result) {
    alert("wating your payment!");
    console.log(result);
  }
  function handleError(result) {
    alert("payment failed!");
    console.log(result);
  }
  function handleCancelTransaction(result) {
    alert("you closed the popup without finishing the payment");
  }

  useMidtransEmbed(
    "token",
    handleSuccess,
    handlePending,
    handleError,
    handleCancelTransaction
  );

  return (
    <MainLayout className="mt-60">
      <CheckOutStep currentStepIndex={1} />
      <NotificationBox
        className={"bg-red-500"}
        message={"Selesaikan pembayaran sampai 10 Maret 2023 12:00"}
      />
      <div className="flex justify-center gap-6">
        <div className="w-[30%]">
          <div id="snap-container"></div>
        </div>
        <div className="w-1/4">
          <FlightDetail />
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
