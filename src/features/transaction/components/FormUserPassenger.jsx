import FormLayout from "@/features/transaction/components/FormLayout";
import FormUserContent from "@/features/transaction/components/FormUserContent";
import FormPassengerContent from "@/features/transaction/components/FormPassengerContent";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const FormUserPassenger = ({ onSubmit, formId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { passengers } = useSelector((state) => state.homepage);

  const totalPassenger = passengers.adult + passengers.child;

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      <FormLayout type={"Pemesan"} className={"mb-5"}>
        <FormUserContent register={register} errors={errors} />
      </FormLayout>
      {!!totalPassenger && (
        <FormLayout type={"Penumpang"}>
          {Array.from({ length: totalPassenger }).map((_, i) => (
            <FormPassengerContent
              index={i + 1}
              key={i + 1}
              register={register}
              control={control}
              errors={errors}
            />
          ))}
        </FormLayout>
      )}
    </form>
  );
};

export default FormUserPassenger;
