import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import HistoryNotFound from "../layouts/HistoryNotFound";
import MainLayout from "@/layouts/MainLayout";

const HistoryNotFoundPage = () => {
  return (
    <MainLayout>
      <HeaderMenu title={"Riwayat Pemesanan"} headerId={1} />
      <div className="mt-[65px] ">
        <HistoryNotFound />
      </div>
    </MainLayout>
  );
};

export default HistoryNotFoundPage;
