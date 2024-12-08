import MainLayout from "@/layouts/MainLayout";
import HistoryContent from "../layouts/HistoryContent";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";

export default function HistoryPage() {
  return (
    <MainLayout>
      <HeaderMenu title={"Riwayat Pemesanan"} headerId={1} />
      <div>
        <HistoryContent />
      </div>
    </MainLayout>
  );
}
