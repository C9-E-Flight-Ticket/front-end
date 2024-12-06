const AccountSettingsCard = () => {
  return (
    <>
      <div className="w-[550px] py-[6px] px-4">
        <div
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[4px] py-6"
        >
          <div className="w-[518px]">
            <form>
              <div className="grid gap-4 p-4">
                <div className="text-xl font-bold">Pengaturan Akun</div>
                <div className="block">
                  <div className="rounded-t-[10px] py-2 px-4 bg-[#A06ECE] text-white text-base font-medium">
                    Ubah Password
                  </div>
                  <div className="grid gap-3 p-4">
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Password Baru
                      </label>
                      <input
                        type="text"
                        className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        value={"User12345"}
                      ></input>
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Konfirmasi Password Baru
                      </label>
                      <input
                        type="text"
                        className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        value={"User12345"}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] py-3 bg-[#4B1979] rounded-xl text-white">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingsCard;
