import { cn } from "@/lib/utils";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import InputMenuLayout from "@/features/homepage/components/InputMenuLayout";

export function TicketSearching({ className }) {
  return (
    <Card
      className={cn(
        "mt-6 w-96 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]",
        className
      )}
    >
      <CardBody>
        <Typography variant="h5" color="black">
          Pilih Jadwal Penerbangan spesial di{" "}
          <span className="text-deep-purple-700">Tiketku!</span>
        </Typography>
        <InputMenuLayout />
      </CardBody>
      <CardFooter className="py-0 px-0">
        <Button fullWidth className="rounded-t-none" color="deep-purple">
          Cari Penerbangan
        </Button>
      </CardFooter>
    </Card>
  );
}
