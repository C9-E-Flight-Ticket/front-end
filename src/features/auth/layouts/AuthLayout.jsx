import SideBanner from "@/features/auth/components/SideBanner";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ page = "", children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <SideBanner />
      <div className="flex-1 pt-36 bg-white p-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-left w-full max-w-md">
          {page === "register"
            ? "Daftar"
            : page === "forgotPassword"
            ? "Reset Password"
            : "Masuk"}
        </h2>

        {children}

        {page != "forgotPassword" && (
          <p className="text-sm mt-10">
            {page === "register" ? "Sudah" : "Belum"} punya akun?{" "}
            <span
              className="text-purple-500 font-medium hover:cursor-pointer"
              onClick={() =>
                navigate(page === "register" ? "/login" : "/register")
              }
            >
              {page === "register" ? "Masuk" : "Daftar"} di sini
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
