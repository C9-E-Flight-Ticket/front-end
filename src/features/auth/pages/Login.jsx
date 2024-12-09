import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useLoginMutation } from "@/services/api/authApi";

const Login = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await login({
        email: data["email/phoneNumber"],
        password: data.password,
      }).unwrap();
      console.log(response);
    } catch (err) {
      console.log(err);

      if (
        err.status == 404 ||
        err.data?.payload?.message ==
          "Akun belum terverifikasi. Silakan verifikasi email Anda."
      ) {
        setError("email/phoneNumber", {
          type: "manual",
          message: err.data?.payload?.message || "Network Error",
        });
        setError("password", {
          type: "manual",
          message: err.data?.payload?.message || "Network Error",
        });
      }
      if (err.status == 401) {
        setError("password", {
          type: "manual",
          message: err.data?.payload?.message || "Network Error",
        });
      }
    }
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
          disabled={isLoading || Object.keys(errors).length > 0}
        >
          {isLoading ? "Loading..." : "Masuk"}
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Berhasil Login !"}
        isSubmitted={isSuccess}
      />
    </AuthLayout>
  );
};

export default Login;
