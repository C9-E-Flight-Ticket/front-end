import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SideBanner from "../components/SideBanner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setIsSubmitting(true);
    setSuccessMessage("Tautan verifikasi telah dikirim!");

    setTimeout(() => {
      navigate("/otp", { state: { email: data.email } });
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      <SideBanner />
      <div className="flex-1 pt-36 bg-white p-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-left w-full max-w-md">
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
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Nama hanya boleh berisi huruf",
              },
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
                value: /^\+?[0-9]*$/,
                message: "Nomor telepon tidak valid",
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
            color={isSubmitting ? "bg-purple-200" : "bg-purple-700"}
            className="w-full"
          />
        </form>

        <p className="text-sm mt-10">
          Sudah punya akun?{" "}
          <a href="/login" className="text-purple-500 font-medium">
            Masuk di sini
          </a>
        </p>

        <div className="w-[273px] max-w-md mt-4">
          {Object.keys(errors).length > 0 && (
            <div className="px-4 py-2 bg-red-500 text-center text-white rounded-xl text-sm">
              <ul>
                <li>{Object.values(errors)[0]?.message}</li>
              </ul>
            </div>
          )}

          {successMessage && (
            <div className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm mt-4">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
