import HistoryHeader from "../components/HistoryHeader";
import HistoryNotFound from "../layouts/HistoryNotFound";
import MainLayout from "@/layouts/MainLayout";

const HistoryNotFoundPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-[260px] shadow-md">
        <HistoryHeader />
      </div>
      <div className="mt-[65px] ">
        <HistoryNotFound />
      </div>
    </MainLayout>
  );
};

export default HistoryNotFoundPage;
