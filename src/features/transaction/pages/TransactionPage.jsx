import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "@/features/transaction/components/SeatSelection";
import SaveButton from "@/features/transaction/components/SaveButton";
import NotificationBox from "@/features/transaction/components/NotificationBox";
import FormUserPassenger from "@/features/transaction/components/FormUserPassenger";
import MainLayout from "@/layouts/MainLayout";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function TransactionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(data) {
    // No error in form handler
    console.log(data);

    setIsSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <MainLayout className="mt-56">
      <div className="mx-auto mb-10">
        <CheckOutStep currentStepIndex={0} />

        <NotificationBox
          message={
            isSubmitted ? "Data Anda berhasil tersimpan!" : "Selesaikan dalam"
          }
          initialTime={900}
          type={isSubmitted ? "success" : "count"}
        />
      </div>
      <div className="flex justify-center ms-10">
        <div className="w-fit flex flex-col justify-center">
          <FormUserPassenger
            formId="userPassengerForm"
            onSubmit={handleSubmit}
          />
          <SeatSelection />
          <SaveButton targetFormId="userPassengerForm" />
        </div>
        <div className="w-1/4 flex justify-center relative">
          <div className="max-w-md p-6 fixed">
            <FlightDetail />
            {isSubmitted && (
              <Button
                color="red"
                className="!bg-red-500 mt-5"
                fullWidth
                onClick={() => navigate("/payment")}
              >
                Lanjut Bayar
              </Button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
