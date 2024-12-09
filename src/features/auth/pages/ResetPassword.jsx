import AuthLayout from "@/features/auth/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Button } from "@material-tailwind/react";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const isSuccess = false;

  async function onSubmit(data) {
    console.log(data);
  }

  return (
    <AuthLayout page="resetPassword">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
        <InputField
          label="Masukkan Password Baru"
          name="oldPassword"
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
          error={errors.oldPassword}
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
        <Button type="submit" fullWidth className="bg-purple-700">
          Simpan
        </Button>
      </form>
      <Notification
        errors={errors}
        successMessage={"Berhasil ResetPassword !"}
        isSubmitted={isSuccess}
      />
    </AuthLayout>
  );
};

export default ResetPassword;
