import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import AuthLayout from "../layouts/AuthLayout";
import Notification from "../components/Notification";
import { useRegisterMutation } from "@/services/api/authApi";
Button;

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const [userRegister, { isLoading, isSuccess }] = useRegisterMutation();

  const handleError = (field, message) => {
    setError(field, {
      type: "manual",
      message: message || "Network Error",
    });
  };

  async function onSubmit(data) {
    const { name, email, phone: phoneNumber, password } = data;

    try {
      const response = await userRegister({
        name,
        email,
        phoneNumber,
        password,
      }).unwrap();
      localStorage.setItem("userId", response.payload?.datas.user.id);
    } catch (error) {
      console.log(error);
      if (error.status == 400) {
        handleError("email", error.data?.payload.message);
      }
    }

    setTimeout(() => {
      navigate("/otp", { state: { email: data.email } });
    }, 2000);
  }

  return (
    <AuthLayout page="register">
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
              value: 6,
              message: "Password minimal 6 karakter",
            },
          }}
          error={errors.password}
          watch={watch}
        />
        <Button
          type="submit"
          fullWidth
          className="bg-purple-700"
          disabled={isLoading || Object.keys(errors).length > 0 || isSuccess}
        >
          {isLoading ? "Loading..." : isSuccess ? "Redirecting..." : "Daftar"}
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Tautan Verifikasi telah dikirim!"}
        isSubmitted={isSuccess}
      />
    </AuthLayout>
  );
};

export default RegisterPage;
