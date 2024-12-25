import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";
import useMidtransEmbed from "@/hooks/useMidtransEmbed";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { formatDateToUI, formattedTime } from "@/utils/helper";
import { useEffect } from "react";
import {
  updateTransactionDate,
  updateTransactionStatus,
  updateTransactionTime,
} from "@/services/slices/transactionSlice";

const PaymentPage = () => {
  const { bookingCode, transactionToken, transactionDate, transactionTime } =
    useSelector((state) => state.transaction);

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
    console.log(result);
    dispatch(updateTransactionStatus(true));
    navigate("/success");
  }

  function handlePending(result) {
    navigate("/");

    console.log(result);
  }
  function handleError(result) {
    console.log(result);
    console.log("error");
    navigate("/");
  }

  function handleCancelTransaction(result) {
    console.log("cancel");
    console.log(result);
    navigate(-1);
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
        <div className="w-full justify-center md:justify-start flex order-1 md:order-2">
          <div className="w-[370px]">
            <FlightDetail bookingCode={bookingCode} />
          </div>
        </div>

        {!transactionToken ? (
          <div className="w-full flex justify-center md:justify-end items-center order-2 md:order-1">
            <Spinner className="h-16 w-16" />
          </div>
        ) : (
          <div className="w-full flex justify-center md:justify-end order-2 md:order-1 mb-10 md:mb-0">
            <div className="border rounded">
              <div id="snap-container"></div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
