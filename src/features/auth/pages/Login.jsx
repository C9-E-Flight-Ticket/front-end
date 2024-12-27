import Cookies from "js-cookie";

import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useLoginMutation } from "@/services/api/authApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const emailOrPhone = watch("email/phoneNumber");

  useEffect(() => {
    clearErrors();
  }, [emailOrPhone, clearErrors]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  async function onSubmit(data) {
    try {
      const response = await login({
        email: data["email/phoneNumber"].toLowerCase(),
        password: data.password,
      }).unwrap();
      const token = response.payload?.data;

      if (import.meta.env.VITE_NODE_ENV != "production")
        Cookies.set("access_token", token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.log(err);

      const handleError = (field, message) => {
        setError(field, {
          type: "manual",
          message: message || "Network Error",
        });

        // Clear the error after 3 seconds
        setTimeout(() => clearErrors(field), 3000);
      };

      if (
        err.status == 404 ||
        err.data?.payload?.message ===
          "Akun belum terverifikasi. Silakan verifikasi email Anda."
      ) {
        handleError("email/phoneNumber", err.data?.payload?.message);
        handleError("password", err.data?.payload?.message);
      } else if (err.status == 401) {
        handleError("password", err.data?.payload?.message);
      } else {
        handleError("email/phoneNumber", err.data?.payload?.message);
        handleError("password", err.data?.payload?.message);
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
          withForgotPassword={true}
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
          {isLoading ? "Loading..." : isSuccess ? "Redirecting..." : "Masuk"}
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
