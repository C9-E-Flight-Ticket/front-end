import HistoryHeader from "@/features/history/components/HistoryHeader";
import MainLayout from "@/layouts/MainLayout";
import ChangeProfileCard from "../components/ChangeProfileCard";
import Option from "../components/Option";
import AccountSettingsCard from "../components/AccountSettingsCard";
import { useState } from "react";
import LogoutModal from "../components/LogoutModal";

const AccountPage = () => {
  const [selectedOption, setSelectedOption] = useState("profile");
  const [modalActive, setModalActive] = useState(false);

  const handleOption = (value) => {
    setSelectedOption(value);
  };

  const handleLogoutModal = (value) => {
    setModalActive(value);
  };

  return (
    <>
      <MainLayout>
        <div className="w-full h-[260px] shadow-md">
          <HistoryHeader />
        </div>
        <div className="absolute top-[304px] left-1/2 -translate-x-1/2 flex gap-[10px]">
          <Option
            handleOption={handleOption}
            handleLogoutModal={handleLogoutModal}
          />
          {selectedOption === "profile" ? (
            <ChangeProfileCard />
          ) : selectedOption === "settings" ? (
            <AccountSettingsCard />
          ) : (
            ""
          )}
        </div>
        {modalActive && <LogoutModal handleLogoutModal={handleLogoutModal} />}
      </MainLayout>
    </>
  );
};

export default AccountPage;
