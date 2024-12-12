import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import OtpHeader from "../components/OtpHeader";
import OtpInput from "../components/OtpInput";

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state || { email: "" };

  if (!email) navigate("/register");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [otpError, setOtpError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formattedEmail = email
    ? email.replace(/(.{3})(.*)(@.*)/, "$1***$3")
    : "";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.join("") === "123456") {
      setSuccessMessage("Registrasi berhasil");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setOtpError("Maaf, kode OTP salah!");
      setSuccessMessage("");
    }
  };

  const resendOtp = () => {
    setTimer(60);
    setOtpError("");
    setSuccessMessage("");
  };

  return (
    <>
      <OtpHeader />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[900px] h-[600px] bg-white p-8 flex flex-col items-center">
          <div
            onClick={() => navigate("/register")}
            className="cursor-pointer self-start"
          >
            <img src="/arrow-left-black.png" alt="Back" className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-10 self-start px-32">
            Masukkan OTP
          </h2>
          <p className="text-center mb-12 text-sm text-black">
            Ketik 6 digit kode yang dikirimkan ke{" "}
            {email.replace(/(.{1}).+(@.*)/, "$1*****$2")}
          </p>

          <OtpInput value={otp} onChange={handleOtpChange} />

          {timer > 0 ? (
            <p className="text-center text-sm text-black mt-6">
              Kirim Ulang OTP dalam {timer} detik
            </p>
          ) : (
            <p
              className="text-center text-red-500 text-sm mt-6 cursor-pointer"
              onClick={resendOtp}
            >
              Kirim Ulang
            </p>
          )}

          <Button
            onClick={handleSubmit}
            className="mt-32 w-[568px] rounded-2xl bg-purple-800"
          >
            Simpan
          </Button>

          <div className="w-[273px] max-w-md mt-52">
            {otpError && (
              <div className="px-4 py-2 bg-red-500 text-center text-white rounded-xl text-sm">
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
