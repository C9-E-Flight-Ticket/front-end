import { TicketSearching } from "@/features/homepage/layouts/TicketSearching";
import Destination from "../components/Destination";
import Banner from "../layouts/Banner";
import MainLayout from "@/layouts/MainLayout";

export default function Homepage() {
  return (
    <MainLayout>
      <Banner />
      <TicketSearching
        className={"w-[73%] relative z-[99] mx-auto mt-[37px]"}
      />
      <Destination className={"mx-auto w-[73%] mt-6"} />
    </MainLayout>
  );
}
