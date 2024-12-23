import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import SuccessContent from "../components/SuccessContent";
import NotificationBox from "../components/NotificationBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetFlightState } from "@/services/slices/flightSlice";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isTransactionSuccess } = useSelector((state) => state.transaction);

  useEffect(() => {
    isTransactionSuccess ? dispatch(resetFlightState()) : navigate("/");
  }, [dispatch, isTransactionSuccess, navigate]);

  return (
    <>
      <MainNavbar />
      <CheckOutStep currentStepIndex={2} />
      <NotificationBox
        type="success"
        message={"Terimakasih atas pembayaran transaksi"}
      />
      <SuccessContent />
    </>
  );
}
