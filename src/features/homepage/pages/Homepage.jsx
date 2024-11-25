import MainNavbar from "@/components/MainNavbar/MainNavbar";
import { TicketSearching } from "@/features/homepage/components/TicketSearching";
import Destination from "../components/Destination";

export default function Homepage() {
  return (
    <>
      <MainNavbar />

      <div className="h-screen flex justify-center">
        <TicketSearching className={"w-[70rem]"} />
      </div>
      <Destination />
    </>
  );
}
