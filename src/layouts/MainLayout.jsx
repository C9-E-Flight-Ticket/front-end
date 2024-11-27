import MainNavbar from "@/components/MainNavbar/MainNavbar";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <div className="min-h-screen">{children}</div>
    </>
  );
}
