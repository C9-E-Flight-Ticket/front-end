import { cn } from "@/lib/utils";

const InputGroupLayout = ({ children, className }) => {
  return (
    <div className={cn("flex gap-8 items-center w-full", className)}>
      {children}
    </div>
  );
};

export default InputGroupLayout;
