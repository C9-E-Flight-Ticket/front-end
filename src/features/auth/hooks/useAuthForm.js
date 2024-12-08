import { useForm } from "react-hook-form";

export const useAuthForm = (defaultValues) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return {
    register,
    handleSubmit,
    errors,
  };
};
