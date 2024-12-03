import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const FormUserContent = ({ register, errors }) => {
  const [isHaveFamilyName, setIsHaveFamilyName] = useState(false);

  return (
    <>
      <h2 className="mb-3 p-2 ps-4 text-white bg-[#3C3C3C] rounded-t-xl">
        Data Diri Pemesan
      </h2>
      <div className="mb-1 flex flex-col gap-6 mx-3">
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Nama Lengkap
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register("user.name", { required: true })}
            placeholder="John Doe"
            className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
          />
          {errors.user?.name && (
            <p className="text-red-700 text-sm">Name is required</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <p className="text-black text-sm">Punya Nama Keluarga?</p>
            <ToggleSwitch
              className="ms-auto"
              color="#7126B5"
              isOn={isHaveFamilyName}
              setIsOn={setIsHaveFamilyName}
            />
          </div>
          <div className="flex flex-col gap-6">
            <Typography
              variant="h6"
              color="deep-purple"
              className="-mb-3 text-primaryPurple "
            >
              Nama Keluarga
            </Typography>
            <input
              {...register("user.familyName")}
              disabled={!isHaveFamilyName}
              className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900 disabled:opacity-80 disabled:bg-gray-200 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Nomor Telepon
        </Typography>
        <input
          {...register("user.phoneNumber")}
          placeholder="0892718272"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Email
        </Typography>
        <input
          {...register("user.email")}
          type="email"
          placeholder="name.example@mail.com"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
      </div>
    </>
  );
};

export default FormUserContent;
