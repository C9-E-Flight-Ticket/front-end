import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data) {
    setIsSubmitted(true);
    console.log(data);
  }

  return (
    <AuthLayout page="login">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
        <InputField
          label="Email/No Telepon"
          name="email/phoneNumber"
          type="email/phoneNumber"
          placeholder="johndoe@gmail.com"
          register={register}
          rules={{
            required: "Email wajib diisi",
            pattern: {
              value:
                /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|(\+?\d{1,3}|\d{1,4})?\s?\d+)$/,
              message: "Format Email/No Telepon tidak valid",
            },
          }}
          error={errors["email/phoneNumber"]}
          watch={watch}
        />
        <InputField
          label="Password"
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
        <Button type="submit" fullWidth className="bg-purple-700">
          Masuk
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Berhasil Login !"}
        isSubmitted={isSubmitted}
      />
    </AuthLayout>
  );
};

export default Login;
