const Option = ({ handleOption }) => {
  return (
    <div className="w-[370px] h-[189px] grid gap-4">
      <button onClick={() => handleOption("profile")}>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <img className="w-6" src="/change-profile.svg" />
            <div className="text-base font-medium">Ubah Profil</div>
          </div>
          <div className="w-[328px] h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <button onClick={() => handleOption("settings")}>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <img className="w-6" src="/settings.svg" />
            <div className="text-base font-medium">Pengaturan Akun</div>
          </div>
          <div className="w-[328px] h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <button onClick={() => handleOption("logout")}>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <img className="w-6" src="/log-out.svg" />
            <div className="text-base font-medium">Keluar</div>
          </div>
          <div className="w-[328px] h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <div className="text-[#8A8A8A] text-xs leading-[18px] text-center">
        Version 1.1.0
      </div>
    </div>
  );
};

export default Option;
