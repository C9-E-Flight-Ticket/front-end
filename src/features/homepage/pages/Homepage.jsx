import MainNavbar from "@/components/MainNavbar/MainNavbar";
import { TicketSearching } from "@/features/homepage/layouts/TicketSearching";
import Destination from "../components/Destination";
import Banner from "../layouts/Banner";

export default function Homepage() {
  return (
    <>
      <MainNavbar />
      <Banner />
      <div className="h-screen flex justify-center  relative z-[99]">
        <TicketSearching className={"w-9/12"} />
      </div>
      <Destination />
    </>
  );
}
