import ToggleSwitch from "@/features/homepage/components/ToggleSwitch";
import { Typography, Select, Option } from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FormPassengerContent = ({ index, register, control, errors }) => {
  const [isHaveFamilyName, setIsHaveFamilyName] = useState(false);

  return (
    <div>
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
        <div className="flex flex-col gap-2">
          <Controller
            name={`passenger${index}.title`}
            rules={{ required: "Title is required!" }}
            control={control}
            defaultValue={"mr"}
            render={({ field }) => (
              <Select
                {...field}
                value={field.value}
                onChange={(value) => field.onChange(value)}
                size="lg"
                className={cn(
                  "border-[#adadad] border",
                  errors?.[`passenger${index}`]?.title &&
                    "border-red-600 outline-red-800"
                )}
                labelProps={{
                  className:
                    "before:!border-transparent after:!border-transparent",
                }}
                menuProps={{ className: "text-black" }}
              >
                <Option value="mr">Mr.</Option>
                <Option value="ms">Ms.</Option>
              </Select>
            )}
          />
          {errors?.[`passenger${index}`]?.title && (
            <p className="text-red-700 text-sm">
              {errors[`passenger${index}`].title.message}
            </p>
          )}
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Nama Lengkap
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register(`passenger${index}.name`, {
              required: "Name is required",
            })}
            placeholder="John Doe"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors?.[`passenger${index}`]?.name &&
                "border-red-600 outline-red-800"
            )}
          />
          {errors?.[`passenger${index}`]?.name && (
            <p className="text-red-700 text-sm">
              {errors[`passenger${index}`].name.message}
            </p>
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
          <div className="flex flex-col gap-2">
            <Typography
              variant="h6"
              color="deep-purple"
              className="mb-1 text-primaryPurple"
            >
              Nama Keluarga
            </Typography>
            <input
              {...register(`passenger${index}.familyName`, {
                required: isHaveFamilyName,
              })}
              disabled={!isHaveFamilyName}
              className={cn(
                "p-2 rounded border border-[#adadad] focus:border-t-deep-purple-900",
                !isHaveFamilyName &&
                  "opacity-80 bg-gray-200 cursor-not-allowed",
                errors?.[`passenger${index}`]?.familyName &&
                  "border-red-600 outline-red-800"
              )}
            />
            {errors?.[`passenger${index}`]?.familyName && (
              <p className="text-red-700 text-sm">
                {errors[`passenger${index}`].familyName.message}
              </p>
            )}
          </div>
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Tanggal Lahir
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register(`passenger${index}.birthDate`, {
              required: "Tanggal Lahir is required",
            })}
            type="date"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors?.[`passenger${index}`]?.birthDate &&
                "border-red-600 outline-red-800"
            )}
          />
          {errors?.[`passenger${index}`]?.birthDate && (
            <p className="text-red-700 text-sm">
              {errors[`passenger${index}`].birthDate.message}
            </p>
          )}
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          Kewarganegaraan
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register(`passenger${index}.nationality`, {
              required: "Kewarganegaraan is required",
            })}
            placeholder="Indonesia"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors?.[`passenger${index}`]?.nationality &&
                "border-red-600 outline-red-800"
            )}
          />
          {errors?.[`passenger${index}`]?.nationality && (
            <p className="text-red-700 text-sm">
              {errors[`passenger${index}`].nationality.message}
            </p>
          )}
        </div>

        <Typography
          variant="h6"
          color="deep-purple"
          className="-mb-3 text-primaryPurple"
        >
          KTP/Paspor
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            {...register(`passenger${index}.identityNumber`, {
              required: "KTP/Paspor is required",
            })}
            placeholder="1234567890"
            className={cn(
              "p-2 rounded border border-[#adadad]",
              errors?.[`passenger${index}`]?.identityNumber &&
                "border-red-600 outline-red-800"
            )}
          />
          {errors?.[`passenger${index}`]?.identityNumber && (
            <p className="text-red-700 text-sm">
              {errors[`passenger${index}`].identityNumber.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormPassengerContent;
