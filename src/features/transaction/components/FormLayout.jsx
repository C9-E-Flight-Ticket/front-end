import { cn } from "@/lib/utils";
import { Card, Typography } from "@material-tailwind/react";

export default function FormLayout({ className, type, children }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className={cn(
        "p-5 h-fit mx-5 rounded-none border border-[#8A8A8A]",
        className
      )}
    >
      <Typography variant="h5" color="black">
        Isi Data {type}
      </Typography>
      <div className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">{children}</div>
    </Card>
  );
}
