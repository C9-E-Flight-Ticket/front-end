import { useForm } from "react-hook-form";

const ChangeProfileCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 p-4">
                <div className="text-xl font-bold">Ubah Data Profil</div>
                <div className="block">
                  <div className="rounded-t-[10px] py-2 px-4 bg-[#A06ECE] text-white text-base font-medium">
                    Data Diri
                  </div>
                  <div className="grid gap-3 p-4">
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        {...register("fullName", {
                          required: "Full name is required",
                        })}
                        className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        defaultValue={"Harry."}
                      />
                      {errors.fullName && (
                        <span className="text-sm text-red-500">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Nomor Telepon
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        {...register("phoneNumber", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^(\+?\d{1,3}|\d{1,4})?\s?\d+$/,
                            message: "Invalid phone number",
                          },
                        })}
                        className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        defaultValue={"+62 897823232"}
                      />
                      {errors.phoneNumber && (
                        <span className="text-sm text-red-500">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm font-bold text-[#4B1979]">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                          },
                        })}
                        className="border border-[#D0D0D0] rounded-[4px] py-2 pl-4 pr-2"
                        defaultValue={"Johndoe@gmail.com"}
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          {errors.email.message}
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

export default ChangeProfileCard;
