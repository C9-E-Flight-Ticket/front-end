import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import { Typography, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const FormPassengerContent = ({ index }) => {
  const [isHaveFamilyName, setIsHaveFamilyName] = useState(false);
  return (
    <>
      <h2 className="mb-5 p-2 ps-4 text-white bg-[#3C3C3C] rounded-t-xl">
        Data Diri Penumpang {index} - Adult
      </h2>
      <div className="flex flex-col gap-6 mx-3">
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Title
        </Typography>
        <Select
          size="lg"
          value="mr"
          onChange={() => {}}
          className="border-[#adadad] border"
          labelProps={{
            className: "before:!border-transparent after:!border-transparent",
          }}
          menuProps={{ className: "text-black" }}
        >
          <Option
            value="mr"
            className="border border-x-transparent border-t-transparent border-b-black rounded-none rounded-t-lg"
          >
            Mr.
          </Option>
          <Option
            value="ms"
            className="border border-x-transparent border-t-transparent !border-b-black rounded-none"
          >
            Ms.
          </Option>
        </Select>
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
          Tanggal Lahir
        </Typography>
        <input
          type="date"
          placeholder="name@mail.com"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Kewarganegaraan
        </Typography>
        <input
          placeholder="Indonesia"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          KTP/Paspor
        </Typography>
        <input className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900" />
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Negara Penerbit
        </Typography>
        <input className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900" />
        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Berlaku Sampai
        </Typography>
        <input
          type="date"
          placeholder="name@mail.com"
          className="p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900"
        />
      </div>
    </>
  );
};

export default FormPassengerContent;