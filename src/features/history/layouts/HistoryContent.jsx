import FlightDetail from "@/components/FlightDetail/FlightDetail";
import TicketCard from "../components/TicketCard";

const HistoryContent = () => {
  return (
    <div className="mt-[10px] flex justify-center">
      <div className="w-[500px] mr-[50px] ">
        <p className="mb-[12px] text-[16px] font-bold ">Maret 2023</p>
        <TicketCard />
      </div>
      <div className="w-[346px] ">
        <FlightDetail className="w-full" />
      </div>
    </div>
  );
};

export default HistoryContent;
