import { Button } from "@material-tailwind/react";

const SaveButton = ({ targetFormId, isLoading }) => {
  return (
    <Button
      className="w-11/12 mx-auto bg-textPurple text-white p-2 rounded-md"
      type="submit"
      form={targetFormId}
      disabled={isLoading}
    >
      {isLoading ? "Membuat Transaksi..." : "Buat Transaksi"}
    </Button>
  );
};

export default SaveButton;
