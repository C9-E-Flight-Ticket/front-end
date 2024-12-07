import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import MainLayout from "@/layouts/MainLayout";
import NotificationSection from "../components/NotificationSection";

const NotificationPage = () => {
  return (
    <MainLayout>
      <HeaderMenu title={"Notifikasi"} headerId={1} />
      <NotificationSection />
    </MainLayout>
  );
};

export default NotificationPage;
