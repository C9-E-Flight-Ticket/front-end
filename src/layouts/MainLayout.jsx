import MainNavbar from "@/components/MainNavbar/MainNavbar";
import { cn } from "@/lib/utils";

export default function MainLayout({ children, className }) {
  return (
    <>
      <MainNavbar />
      <div className={cn("min-h-screen mb-10", className)}>{children}</div>
    </>
  );
}
