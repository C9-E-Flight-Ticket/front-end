import TicketSearching from "@/features/homepage/layouts/TicketSearching";
import Destination from "../components/Destination";
import Banner from "../layouts/Banner";
import MainLayout from "@/layouts/MainLayout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetFlightState } from "@/services/flightSlice";

export default function Homepage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(resetFlightState());
  // }, [dispatch]);

  return (
    <MainLayout className={"mb-0"}>
      <Banner />
      <TicketSearching
        className={
          "w-[73%] lg:w-[79%] xl:w-[73%] relative z-[99] mx-auto mt-[37px]"
        }
      />
      <Destination className={"mx-auto w-[73%] mt-6 mb-3"} />
    </MainLayout>
  );
}
