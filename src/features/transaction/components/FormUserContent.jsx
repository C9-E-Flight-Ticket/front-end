import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import { cn } from "@/lib/utils";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const FormUserContent = ({ register, errors }) => {
  const [isHaveFamilyName, setIsHaveFamilyName] = useState(false);

  return (
    <div>
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
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors.user?.name && "border-red-600 outline-red-800"
            )}
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
          <Typography
            variant="h6"
            color="deep-purple"
            className="mb-1 text-primaryPurple"
          >
            Nama Keluarga
          </Typography>
          <div className="flex flex-col gap-2">
            <input
              {...register("user.familyName", { required: isHaveFamilyName })}
              disabled={!isHaveFamilyName}
              className={cn(
                "p-2 rounded border border-[#adadad] disabled:opacity-80 disabled:bg-gray-200 disabled:cursor-not-allowed",
                errors.user?.familyName &&
                  isHaveFamilyName &&
                  "border-red-600 outline-red-800"
              )}
            />
            {errors.user?.familyName && isHaveFamilyName && (
              <p className="text-red-700 text-sm">Family name is required</p>
            )}
          </div>
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Nomor Telepon
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register("user.phoneNumber", { required: true })}
            placeholder="0892718272"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors.user?.phoneNumber && "border-red-600 outline-red-800"
            )}
          />
          {errors.user?.phoneNumber && (
            <p className="text-red-700 text-sm">Phone number is required</p>
          )}
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Email
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register("user.email", { required: true })}
            type="email"
            placeholder="name.example@mail.com"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors.user?.email && "border-red-600 outline-red-800"
            )}
          />
          {errors.user?.email && (
            <p className="text-red-700 text-sm">Email is required</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormUserContent;
