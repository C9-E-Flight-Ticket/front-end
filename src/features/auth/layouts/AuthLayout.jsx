import SideBanner from "@/features/auth/components/SideBanner";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ page = "", children }) => {
  const navigate = useNavigate();
  return (
    <div className="block lg:flex h-screen">
      <SideBanner />
      <div className="pt-36 bg-white p-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left w-full">
          {page === "register"
            ? "Daftar"
            : page === "resetPassword"
            ? "Reset Password"
            : page === "emailVerificationForResetPassword"
            ? "Reset Password"
            : "Masuk"}
        </h2>

        {children}

        {page === "emailVerificationForResetPassword" ||
        page === "resetPassword" ? (
          <p className="text-sm mt-10">
            Ingin kembali ke halaman login?{" "}
            <span
              className="text-purple-500 font-medium hover:cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        ) : (
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
