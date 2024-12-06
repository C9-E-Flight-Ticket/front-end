import MainLayout from "@/layouts/MainLayout";
import ChangeProfileCard from "../components/ChangeProfileCard";

const AccountPage = () => {
  return (
    <MainLayout>
      <div className="absolute top-[304px] left-1/2 -translate-x-1/2 flex gap-[10px]">
        <ChangeProfileCard />
      </div>
    </MainLayout>
  );
};

export default AccountPage;
