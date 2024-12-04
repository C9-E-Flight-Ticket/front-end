import MainLayout from "@/layouts/MainLayout";
import TicketCard from "../components/TicketCard";

export default function HistoryPage() {
  return (
    <MainLayout>
      <div className="mt-48">
        <TicketCard />
      </div>
    </MainLayout>
  );
}
