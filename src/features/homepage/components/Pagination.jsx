import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function CircularPagination({
  className,
  setOffset,
  limit,
  pagination,
  active,
  setActive,
}) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active == pagination.totalPages) return;

    setOffset((prev) => prev + limit);
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setOffset((prev) => prev - limit);
    setActive(active - 1);
  };

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {pagination &&
          Array.from({ length: pagination.totalPages }).map((_, i) => (
            <IconButton key={i + 1} {...getItemProps(i + 1)}>
              {i + 1}
            </IconButton>
          ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active == pagination.totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
