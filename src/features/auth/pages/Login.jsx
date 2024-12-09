import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
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
    </AuthLayout>
  );
};

export default Login;
