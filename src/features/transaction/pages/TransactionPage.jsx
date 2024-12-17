import CheckOutStep from "@/features/transaction/components/CheckOutStep";
import FlightDetail from "@/features/transaction/components/FlightDetail";
import SeatSelection from "@/features/transaction/components/SeatSelection";
import SaveButton from "@/features/transaction/components/SaveButton";
import NotificationBox from "@/features/transaction/components/NotificationBox";
import FormUserPassenger from "@/features/transaction/components/FormUserPassenger";
import MainLayout from "@/layouts/MainLayout";

import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import useCheckToken from "@/hooks/useCheckToken";
import { useSelector } from "react-redux";
import useTicketInputCheck from "@/hooks/useTicketInputCheck";
import {
  useGetDetailFlightQuery,
  useGetDetailFlightWithReturnQuery,
} from "@/services/api/flightApi";

export default function TransactionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSeatsPergi, setSelectedSeatsPergi] = useState([]);
  const [selectedSeatsPulang, setSelectedSeatsPulang] = useState([]);
  const { passengers, seatClass, isReturnToggleActive } = useSelector(
    (state) => state.homepage
  );

  const isTokenValid = useCheckToken();
  useTicketInputCheck(isTokenValid, passengers);

  const { departureFlightId, returnFlightId } = useSelector(
    (state) => state.flight
  );

  const detailFlightQuery = useGetDetailFlightQuery({
    flightId: [departureFlightId],
    seatClass: seatClass,
    adult: passengers.adult,
    child: passengers.child,
    baby: passengers.baby,
  });

  const detailFlightWithReturnQuery = useGetDetailFlightWithReturnQuery({
    flightId: [departureFlightId, returnFlightId],
    seatClass: seatClass,
    adult: passengers.adult,
    child: passengers.child,
    baby: passengers.baby,
  });

  const { data } = isReturnToggleActive
    ? detailFlightWithReturnQuery
    : detailFlightQuery;

  const navigate = useNavigate();

  function handleSubmit(data) {
    const totalPassengers = passengers.adult + passengers.child;
    const seats = selectedSeatsPergi.map((seatData) => seatData.id);
    const returnSeats = isReturnToggleActive
      ? selectedSeatsPulang.map((seatData) => seatData.id)
      : [];
    const passengerDetails = [];

    for (let index = 0; index < totalPassengers; index++) {
      const passengerKey = `passenger${index + 1}`;
      passengerDetails.push({
        ...data[passengerKey],
        category: index + 1 <= passengers.adult ? "Adult" : "Child",
      });
    }
    const payload = {
      passengerDetails,
      seats: [...seats, ...returnSeats],
      tax: 1320000,
      total: 13320000,
    };

    console.log(payload);

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

        {isTokenValid ? (
          <NotificationBox
            message={
              isSubmitted ? "Data Anda berhasil tersimpan!" : "Selesaikan dalam"
            }
            initialTime={900}
            type={isSubmitted ? "success" : "count"}
          />
        ) : (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-75 z-[10000]" />
            <NotificationBox
              message={"Anda harus login terlebih dahulu!"}
              type={"count"}
            />
          </>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col-reverse md:flex-row gap-[10px]">
          <div className="lg:w-[550px] flex flex-col justify-center">
            <FormUserPassenger
              formId="userPassengerForm"
              onSubmit={handleSubmit}
            />
            <SeatSelection
              seats={data?.payload?.data?.flights[0]?.seats || []}
              returnSeats={data?.payload?.data?.flights[1]?.seats || []}
              selectedSeatsPergi={selectedSeatsPergi}
              selectedSeatsPulang={selectedSeatsPulang}
              setSelectedSeatsPergi={setSelectedSeatsPergi}
              setSelectedSeatsPulang={setSelectedSeatsPulang}
            />

            <SaveButton targetFormId="userPassengerForm" />
          </div>
          <div className="md:w-[300px] lg:w-[370px] flex justify-center relative mb-8">
            <div className="[@media(max-width:539px)]:w-[300px] md:w-[370px] pt-0 md:p-6 md:fixed">
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
      </div>
    </MainLayout>
  );
}
