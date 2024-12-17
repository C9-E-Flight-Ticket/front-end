import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";
import useMidtransEmbed from "@/hooks/useMidtransEmbed";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSendSuccessTransactionMutation } from "@/services/api/transactionApi";

const PaymentPage = () => {
  const { bookingCode, transactionToken } = useSelector(
    (state) => state.transaction
  );
  const [sendPaymentSuccess] = useSendSuccessTransactionMutation();

  const navigate = useNavigate();

  async function handleSuccess(result) {
    console.log(result);
    try {
      await sendPaymentSuccess({
        orderId: result.order_id,
        fraud_status: result.fraud_status,
        transaction_status: result.transaction_status,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }

    navigate("/success");
  }
  function handlePending(result) {
    console.log(result);
  }
  function handleError(result) {
    alert("payment failed!");
    console.log(result);

    navigate("/");
  }
  function handleCancelTransaction(result) {
    // alert("you closed the popup without finishing the payment");

    navigate("/");
  }

  useMidtransEmbed(
    transactionToken,
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
