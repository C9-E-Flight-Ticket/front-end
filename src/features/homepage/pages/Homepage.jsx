import MainNavbar from "@/components/MainNavbar/MainNavbar";
import { TicketSearching } from "@/features/homepage/components/TicketSearching";

export default function Homepage() {
  return (
    <>
      <MainNavbar />

      <div className="h-screen w-screen flex justify-center items-center">
        <TicketSearching className={"w-[70rem]"} />
      </div>
    </>
  );
}
