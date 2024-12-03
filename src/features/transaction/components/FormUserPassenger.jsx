import FormLayout from "@/features/transaction/components/FormLayout";
import FormUserContent from "@/features/transaction/components/FormUserContent";
import FormPassengerContent from "@/features/transaction/components/FormPassengerContent";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";

const FormUserPassenger = ({ formId }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    control,
  } = useForm();

  console.log("Errors");
  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      <FormLayout type={"Pemesan"} className={"mb-5"}>
        <FormUserContent register={register} errors={errors} />
      </FormLayout>
      <FormLayout type={"Penumpang"}>
        <FormPassengerContent index={1} register={register} control={control} />
        <FormPassengerContent index={2} register={register} control={control} />
      </FormLayout>
      {/* <Button type="submit">Submit</Button> */}
    </form>
  );
};

export default FormUserPassenger;
