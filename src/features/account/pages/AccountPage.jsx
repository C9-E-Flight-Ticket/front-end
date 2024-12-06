import HistoryHeader from "@/features/history/components/HistoryHeader";
import MainLayout from "@/layouts/MainLayout";
import ChangeProfileCard from "../components/ChangeProfileCard";
import Option from "../components/Option";
import AccountSettingsCard from "../components/AccountSettingsCard";
import { useState } from "react";

const AccountPage = () => {
  const [selectedOption, setSelectedOption] = useState("profile");

  const handleOption = (value) => {
    setSelectedOption(value);
  };

  return (
    <MainLayout>
      <div className="w-full h-[260px] shadow-md">
        <HistoryHeader />
      </div>
      <div className="absolute top-[304px] left-1/2 -translate-x-1/2 flex gap-[10px]">
        <Option handleOption={handleOption} />
        {selectedOption === "profile" ? (
          <ChangeProfileCard />
        ) : selectedOption === "settings" ? (
          <AccountSettingsCard />
        ) : selectedOption === "logout" ? (
          ""
        ) : (
          ""
        )}
      </div>
    </MainLayout>
  );
};

export default AccountPage;
