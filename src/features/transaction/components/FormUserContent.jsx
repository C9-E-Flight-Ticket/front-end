import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const FormUserContent = () => {
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
        <input
          placeholder="John Doe"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
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
          type="email"
          placeholder="name.example@mail.com"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
      </div>
    </>
  );
};

export default FormUserContent;
