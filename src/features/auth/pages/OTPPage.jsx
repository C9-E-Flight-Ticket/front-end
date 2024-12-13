import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import OtpHeader from "../components/OtpHeader";
import OtpInput from "../components/OtpInput";
import {
  useResendOTPMutation,
  useVerifyEmailMutation,
} from "@/services/api/authApi";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [otpError, setOtpError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [sendOTP, { isSuccess, isLoading }] = useVerifyEmailMutation();
  const [resendOTP] = useResendOTPMutation();

  useEffect(() => {
    if (!user) navigate("/register");
  }, [user, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user.id;
    const otpCode = otp.join("");

    try {
      await sendOTP({ userId, otp: otpCode }).unwrap();
      setOtpError("");
      setSuccessMessage("Registrasi berhasil!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      if (error.status == 400) {
        setOtpError(`Maaf, ${error.data?.payload.message}!`);
      } else {
        setOtpError(error.data?.payload.message);
      }
      setSuccessMessage("");
      setOtp(["", "", "", "", "", ""]);
    }
  };

  const handleResendOtp = () => {
    try {
      resendOTP(user.id);
      setTimer(60);
      setOtpError("");
      setSuccessMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <OtpHeader />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[900px] h-[600px] bg-white p-8 flex flex-col items-center">
          <div
            onClick={() => {
              localStorage.clear();
              navigate("/register");
            }}
            className="cursor-pointer self-start"
          >
            <img src="/arrow-left-black.png" alt="Back" className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-10 self-start px-32">
            Masukkan OTP
          </h2>
          <p className="text-center mb-12 text-sm text-black">
            Ketik 6 digit kode yang dikirimkan ke{" "}
            {user?.email.replace(/(.{1}).+(@.*)/, "$1*****$2")}
          </p>

          <OtpInput value={otp} onChange={handleOtpChange} />

          {timer > 0 ? (
            <p className="text-center text-sm text-black mt-6">
              Kirim Ulang OTP dalam {timer} detik
            </p>
          ) : (
            <p
              className="text-center text-red-500 text-sm mt-6 cursor-pointer"
              onClick={handleResendOtp}
            >
              Kirim Ulang
            </p>
          )}

          <Button
            onClick={handleSubmit}
            className="mt-32 w-[568px] rounded-2xl bg-purple-800"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : isSuccess ? "Redirecting..." : "Simpan"}
          </Button>

          <div className="w-fit mt-16">
            {otpError && (
              <div className="px-10 py-2 bg-red-500 text-center text-white rounded-xl text-sm">
                <ul>
                  <li>{otpError}</li>
                </ul>
              </div>
            )}

            {successMessage && (
              <div className="px-4 py-2 bg-green-500 text-center text-white rounded-xl text-sm mt-4">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
