import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function CircularPagination({
  className,
  setOffset,
  limit,
  pagination,
  currPage,
  setCurrPage,
}) {
  const getItemProps = (indexPage) => ({
    variant: currPage === indexPage ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setCurrPage(indexPage);
      setOffset((prev) => prev + limit * (indexPage - currPage));
    },
    className: "rounded-full",
  });

  const next = () => {
    if (currPage == pagination.totalPages) return;

    setOffset((prev) => prev + limit);
    setCurrPage(currPage + 1);
  };

  const prev = () => {
    if (currPage === 1) return;

    setOffset((prev) => prev - limit);
    setCurrPage(currPage - 1);
  };

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={currPage === 1}
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
        disabled={currPage == pagination.totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
