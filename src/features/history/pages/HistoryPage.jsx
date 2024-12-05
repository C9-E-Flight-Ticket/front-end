import MainLayout from "@/layouts/MainLayout";
import TicketCard from "../components/TicketCard";
import HistoryHeader from "../components/HistoryHeader";

export default function HistoryPage() {
  return (
    <MainLayout>
      <div className="w-full h-[260px] shadow-md">
        <HistoryHeader />
      </div>
      <div className="mt-48">
        <TicketCard />
      </div>
    </MainLayout>
  );
}
