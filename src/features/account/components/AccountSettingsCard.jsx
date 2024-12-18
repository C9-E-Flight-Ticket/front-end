import { useState } from "react";
import { useForm } from "react-hook-form";

const AccountSettingsCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const newPassword = watch("newPassword");
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordEye = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="lg:w-[550px] md:w-[480px] sm:w-[540px] w-[440px] py-[6px] px-4">
        <div
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[4px] py-6"
        >
          <div className="lg:w-[518px] md:w-[448px] sm:w-[508px] w-[408px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 p-4">
                <div className="text-xl font-bold">Pengaturan Akun</div>
                <div className="block">
                  <div className="rounded-t-[10px] py-2 px-4 bg-[#A06ECE] text-white text-base font-medium">
                    Ubah Password
                  </div>
                  <div className="grid gap-3 p-4">
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Masukkan Password Baru
                      </label>
                      <div className="relative grid">
                        <div className="absolute right-3 top-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePasswordEye();
                            }}
                          >
                            <img src="/password-eye.svg" />
                          </button>
                        </div>
                        <input
                          type={passwordEye === false ? "password" : "text"}
                          name="newPassword"
                          {...register("newPassword", {
                            required: "New password is required",
                            minLength: {
                              value: 8,
                              message: "Minimum required length is 8",
                            },
                          })}
                          className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        />
                      </div>

                      {errors.newPassword && (
                        <span className="text-sm text-red-500">
                          {errors.newPassword.message}
                        </span>
                      )}
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Konfirmasi Password Baru
                      </label>
                      <div className="relative grid">
                        <div className="absolute right-3 top-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleConfirmPasswordEye();
                            }}
                          >
                            <img src="/password-eye.svg" />
                          </button>
                        </div>
                        <input
                          type={
                            confirmPasswordEye === false ? "password" : "text"
                          }
                          name="confirmNewPassword"
                          {...register("confirmNewPassword", {
                            required: "Confirm password is required",
                            validate: (value) =>
                              value === newPassword ||
                              "The confirmed password does not match",
                          })}
                          className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        />
                      </div>
                      {errors.confirmNewPassword && (
                        <span className="text-sm text-red-500">
                          {errors.confirmNewPassword.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-[150px] py-3 bg-[#4B1979] hover:bg-[#351e47] rounded-xl text-white">
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
