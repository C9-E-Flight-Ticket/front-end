import MainNavbar from "@/components/MainNavbar/MainNavbar";
import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import SuccessContent from "@/features/transaction/components/SuccessContent";
import NotificationBox from "@/features/transaction/components/NotificationBox";

export default function PaymentSuccessPage() {
  return (
    <>
      <MainNavbar />
      <CheckOutStep currentStepIndex={2} />
      <NotificationBox
        className={"bg-lightGreen"}
        message={"Terimakasih atas pembayaran transaksi"}
      />
      <SuccessContent />
    </>
  );
}
