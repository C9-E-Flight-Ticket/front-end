import { cn } from "@/lib/utils";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import MenuBodyContent from "@/features/homepage/layouts/MenuBodyContent";
import { useNavigate } from "react-router-dom";
import useCheckUserInput from "@/features/homepage/hooks/useCheckUserInput";

export default function TicketSearching({ className }) {
  const navigate = useNavigate();
  const isInputValid = useCheckUserInput();

  return (
    <Card
      className={cn(
        "mt-6 w-96 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] h-fit",
        className
      )}
    >
      <CardBody>
        <Typography variant="h5" color="black" className="mb-5">
          Pilih Jadwal Penerbangan spesial di{" "}
          <span className="text-deep-purple-700">Flaizy!</span>
        </Typography>
        <MenuBodyContent />
      </CardBody>
      <CardFooter className="py-0 px-0">
        <Button
          fullWidth
          className="rounded-t-none bg-[#7126B5] disabled:opacity-70"
          color="deep-purple"
          disabled={!isInputValid}
          onClick={() => navigate("/flight")}
        >
          Cari Penerbangan
        </Button>
      </CardFooter>
    </Card>
  );
}
