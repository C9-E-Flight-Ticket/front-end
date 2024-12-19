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
  updateTransactionStatus,
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
    if (!transactionToken) navigate("/");
  }, [transactionToken, navigate]);

  useEffect(() => {
    if (!transactionDate || !transactionTime) {
      dispatch(updateTransactionTime(formattedTime(new Date())));
      dispatch(updateTransactionDate(formatDateToUI(new Date())));
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

    dispatch(updateTransactionStatus(true));
    navigate("/success");
  }
  function handlePending(result) {
    alert("Pending");
    console.log(result);
    // when user close payment
  }
  function handleError(result) {
    alert("payment failed!");
    console.log(result);

    navigate("/");
  }
  function handleCancelTransaction(result) {
    alert("payment cancel!");

    console.log("close");
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
    <MainLayout className={"mb-0"}>
      <CheckOutStep currentStepIndex={1} className={"static"} />
      <NotificationBox
        className={"bg-red-500 static"}
        message={`Selesaikan pembayaran sampai ${transactionDate} ${transactionTime}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-20 gap-y-14 mt-10">
        {isLoading || !transactionToken ? (
          <div className="w-full flex justify-center md:justify-end items-center md:items-end">
            <Spinner className="h-16 w-16" />
          </div>
        ) : (
          <div className="w-full flex justify-center md:justify-end">
            <div className="border rounded">
              <div id="snap-container"></div>
            </div>
          </div>
        )}

        <div className="w-full justify-center md:justify-start flex">
          <div className="w-[370px]">
            <FlightDetail bookingCode={bookingCode} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
