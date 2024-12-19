import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";
import useMidtransEmbed from "@/hooks/useMidtransEmbed";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSendSuccessTransactionMutation } from "@/services/api/transactionApi";
import { Spinner } from "@material-tailwind/react";
import { formatDateToUI, formattedTime } from "@/utils/helper";
import { useEffect } from "react";
import {
  updateTransactionDate,
  updateTransactionTime,
} from "@/services/transactionSlice";

const PaymentPage = () => {
  const { bookingCode, transactionToken, transactionDate, transactionTime } =
    useSelector((state) => state.transaction);
  const [sendPaymentSuccess, { isLoading }] =
    useSendSuccessTransactionMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!transactionDate || !transactionTime) {
      dispatch(updateTransactionDate(formatDateToUI(new Date())));
      dispatch(updateTransactionTime(formattedTime(new Date())));
    }
  }, [dispatch, transactionDate, transactionTime]);

  async function handleSuccess(result) {
    /*
    const transactionDateTime = result.transaction_time;
    dispatch(
      updateTransactionDate(formatDateToUI(transactionDateTime.split(" ")[0]))
    );
    dispatch(
      updateTransactionTime(formatDateToUI(transactionDateTime.split(" ")[1]))
    );
    */

    try {
      await sendPaymentSuccess({
        order_id: result.order_id,
        fraud_status: result.fraud_status,
        transaction_status: result.transaction_status,
        payment_type: result.payment_type,
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
    console.log(result);

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
        message={`Selesaikan pembayaran sampai ${transactionDate} ${transactionTime}`}
      />
      <div className="flex flex-wrap justify-center gap-6">
        {isLoading || !transactionToken ? (
          <div className="w-[30%] flex justify-center items-center">
            <Spinner className="h-12 w-12" />
          </div>
        ) : (
          <div className="w-[30%]">
            <div id="snap-container"></div>
          </div>
        )}

        <div className="w-1/4">
          <FlightDetail bookingCode={bookingCode} />
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
