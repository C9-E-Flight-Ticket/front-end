import MainLayout from "@/layouts/MainLayout";
import HistoryHeader from "../components/HistoryHeader";
import HistoryContent from "../layouts/HistoryContent";

export default function HistoryPage() {
  return (
    <MainLayout>
      <div className="w-full h-[260px] shadow-md">
        <HistoryHeader />
      </div>
      <div>
        <HistoryContent />
      </div>
    </MainLayout>
  );
}
