import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/components/FlightDetail/FlightDetail";
import FormLayout from "@/features/transaction/components/FormLayout";
import FormUserContent from "@/features/transaction/components/FormUserContent";
import FormPassengerContent from "@/features/transaction/components/FormPassengerContent";
import SeatSelection from "@/features/transaction/components/SeatSelection";
import SaveButton from "@/features/transaction/components/SaveButton";
import NotificationBox from "@/features/transaction/components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

export default function TransactionPage() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <MainLayout>
      <div className="mx-auto mb-10">
        <CheckOutStep currentStepIndex={0} />
        {isClicked && (
          <NotificationBox
            message="Selesaikan dalam"
            initialTime={900}
            className="bg-red-500"
            isClicked={isClicked}
          />
        )}
      </div>
      <div className="flex justify-center ms-10">
        <FormLayout type={"Pemesan"}>
          <FormUserContent />
        </FormLayout>
        <div className="w-fit flex flex-col justify-center">
          <FormLayout type={"Penumpang"}>
            <FormPassengerContent index={1} />
          </FormLayout>
          <SeatSelection />
          <SaveButton setIsClicked={setIsClicked} />
        </div>
        <div className="w-fit flex justify-center">
          <FlightDetail />
        </div>
      </div>
    </MainLayout>
  );
}
