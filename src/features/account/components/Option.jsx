const Option = ({ handleOption, handleLogoutModal }) => {
  return (
    <div className="duration-1000 w-[full] h-[189px] grid lg:justify-center md:justify-end gap-4">
      <button
        className="lg:w-[328px] md:w-[233px] sm:w-full"
        onClick={() => handleOption("profile")}
      >
        <div className="grid gap-4 md:mx-[0px] mx-[35px]">
          <div className="flex gap-4">
            <img className="w-6" src="/change-profile.svg" />
            <div className="text-base font-medium">Ubah Profil</div>
          </div>
          <div className="h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <button
        className="lg:w-[328px] md:w-[233px] sm:w-full"
        // onClick={() => handleOption("settings")}
      >
        <div className="grid gap-4 md:mx-[0px] mx-[35px]">
          <div className="flex gap-4">
            <img className="w-6" src="/settings.svg" />
            <div className="text-base font-medium">Pengaturan Akun</div>
          </div>
          <div className="h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <button
        className="lg:w-[328px] md:w-[233px] sm:w-full"
        onClick={() => handleLogoutModal(true)}
      >
        <div className="grid gap-4 md:mx-[0px] mx-[35px]">
          <div className="flex gap-4">
            <img className="w-6" src="/log-out.svg" />
            <div className="text-base font-medium">Keluar</div>
          </div>
          <div className="h-[1px] bg-[#E5E5E5]"></div>
        </div>
      </button>
      <div className="text-[#8A8A8A] text-xs leading-[18px] text-center">
        Version 1.1.0
      </div>
    </div>
  );
};

export default Option;
