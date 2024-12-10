import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

const DestinationFilterButton = ({
  onClick,
  isActive = "Semua",
  children,
  className,
}) => {
  return (
    <div>
      <button
        className={cn(
          `flex items-center rounded-xl py-[12px] px-4 text-sm ${
            isActive ? "bg-[#7126B5] text-white" : "bg-[#E2D4F0]"
          }`,
          className
        )}
        onClick={onClick}
      >
        <MagnifyingGlassIcon className="w-5 mr-2" />
        {children}
      </button>
    </div>
  );
};

export default DestinationFilterButton;
