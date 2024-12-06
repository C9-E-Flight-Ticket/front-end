import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SideBanner from "../components/SideBanner";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex h-screen">
      <SideBanner />
      <div className="flex-1 bg-white p-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 w-full max-w-md text-left ">
          Daftar
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
        >
          <InputField
            label="Nama"
            name="name"
            type="text"
            placeholder="John Doe"
            register={register}
            rules={{
              required: "Nama wajib diisi",
            }}
            error={errors.name}
            watch={watch}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            register={register}
            rules={{
              required: "Email wajib diisi",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Format email tidak valid",
              },
            }}
            error={errors.email}
            watch={watch}
          />
          <InputField
            label="Nomor Telepon"
            name="phone"
            type="tel"
            placeholder="+62 81818181"
            register={register}
            rules={{
              required: "Nomor telepon wajib diisi",
              pattern: {
                value: /^[0-9]+$/,
                message: "Nomor telepon hanya boleh angka",
              },
            }}
            error={errors.phone}
            watch={watch}
          />
          <InputField
            label="Buat Password"
            name="password"
            type="password"
            placeholder="********"
            register={register}
            rules={{
              required: "Password wajib diisi",
              minLength: {
                value: 8,
                message: "Password minimal 8 karakter",
              },
            }}
            error={errors.password}
            watch={watch}
          />
          <Button
            type="submit"
            text="Daftar"
            color="bg-purple-500"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
