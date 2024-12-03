import FormLayout from "@/features/transaction/components/FormLayout";
import FormUserContent from "@/features/transaction/components/FormUserContent";
import FormPassengerContent from "@/features/transaction/components/FormPassengerContent";
import { useForm } from "react-hook-form";

const FormUserPassenger = ({ onSubmit, formId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      <FormLayout type={"Pemesan"} className={"mb-5"}>
        <FormUserContent register={register} errors={errors} />
      </FormLayout>
      <FormLayout type={"Penumpang"}>
        <FormPassengerContent index={1} register={register} control={control} />
        <FormPassengerContent index={2} register={register} control={control} />
      </FormLayout>
    </form>
  );
};

export default FormUserPassenger;
