import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import FormLayout from "@/features/transaction/components/FormLayout";
import FormUserContent from "../components/FormUserContent";
import FormPassengerContent from "../components/FormPassengerContent";
import SeatSelection from "../components/SeatSelection";
import SaveButton from "../components/SaveButton";
import NotificationBox from "../components/NotificationBox";
import MainLayout from "@/layouts/MainLayout";

export default function TransactionPage() {
  return (
    <MainLayout>
      <div className="mx-auto mb-10">
        <CheckOutStep currentStepIndex={0} />
        <NotificationBox
          message="Selesaikan dalam"
          initialTime={900}
          className="bg-red-500"
        />
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
          <SaveButton />
        </div>
        <div className="w-fit flex justify-center">
          <FlightDetail />
        </div>
      </div>
    </MainLayout>
  );
}
