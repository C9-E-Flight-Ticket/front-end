import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "@/features/transaction/components/SeatSelection";
import SaveButton from "@/features/transaction/components/SaveButton";
import NotificationBox from "@/features/transaction/components/NotificationBox";
import FormUserPassenger from "@/features/transaction/components/FormUserPassenger";
import MainLayout from "@/layouts/MainLayout";

import { useState } from "react";

export default function TransactionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <MainLayout>
      <div className="mx-auto mb-10">
        <CheckOutStep currentStepIndex={0} />
        {isSubmitted && (
          <NotificationBox
            message="Selesaikan dalam"
            initialTime={900}
            className="bg-red-500"
            isSubmitted={isSubmitted}
          />
        )}
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
        <div className="w-fit flex justify-center">
          <FlightDetail />
        </div>
      </div>
    </MainLayout>
  );
}
