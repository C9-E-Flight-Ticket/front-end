import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useResetPasswordMutation } from "@/services/api/authApi";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  async function onSubmit(data) {
    try {
      const response = await resetPassword({
        userId: user.id,
        newPassword: data.newPassword,
        retypePassword: data.retypePassword,
      }).unwrap();

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError("newPassword", {
        type: "manual",
        message: error.data?.payload.message || "Network Error",
      });
      setError("retypePassword", {
        type: "manual",
        message: error.data?.payload.message || "Network Error",
      });
    }
  }

  return (
    <AuthLayout page="resetPassword">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
        <InputField
          label="Masukkan Password Baru"
          name="retypePassword"
          type="password"
          placeholder="********"
          register={register}
          rules={{
            required: "Password lama wajib diisi",
            minLength: {
              value: 6,
              message: "Password minimal 6 karakter",
            },
          }}
          error={errors.retypePassword}
          watch={watch}
        />
        <InputField
          label="Ulangi Password Baru"
          name="newPassword"
          type="password"
          placeholder="********"
          register={register}
          rules={{
            required: "Password baru wajib diisi",
            minLength: {
              value: 6,
              message: "Password minimal 6 karakter",
            },
          }}
          error={errors.newPassword}
          watch={watch}
        />
        <Button
          type="submit"
          fullWidth
          className="bg-purple-700"
          disabled={isLoading || isLoading || Object.keys(errors).length > 0}
        >
          {isLoading ? "Loading..." : isSuccess ? "Redirecting..." : "Simpan"}
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Berhasil Mengubah Password !"}
        isSubmitted={isSuccess}
      />
    </AuthLayout>
  );
};

export default ResetPassword;
