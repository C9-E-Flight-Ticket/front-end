import { Button } from "@material-tailwind/react";

const SaveButton = ({ targetFormId }) => {
  return (
    <Button
      className="w-11/12 mx-auto bg-textPurple text-white p-2 rounded-md"
      type="submit"
      form={targetFormId}
    >
      Simpan
    </Button>
  );
};

export default SaveButton;
