import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";
import { useRequestForgotPasswordByEmailMutation } from "@/services/api/authApi";

const EmailVerificationForResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const [sendEmail, { isLoading, isSuccess }] =
    useRequestForgotPasswordByEmailMutation();

  const navigate = useNavigate();

  const handleError = (field, message) => {
    setError(field, {
      type: "manual",
      message: message || "Network Error",
    });
  };

  async function onSubmit(data) {
    try {
      const response = await sendEmail(data.email).unwrap();
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.payload?.data.userId,
          email: data.email,
          action: "resetPassword",
        })
      );
      setTimeout(() => {
        navigate("/otp");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      handleError("email", "Email belum terdaftar !");
    }
  }

  return (
    <AuthLayout page="emailVerificationForResetPassword">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
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
        <Button
          type="submit"
          fullWidth
          className="bg-purple-700"
          disabled={isLoading || isLoading || Object.keys(errors).length > 0}
        >
          {isLoading
            ? "Loading..."
            : isSuccess
            ? "Redirecting..."
            : "Kirim kode verifikasi"}
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Tautan berhasil dikirim !"}
        isSubmitted={isSuccess}
      />
    </AuthLayout>
  );
};

export default EmailVerificationForResetPassword;
