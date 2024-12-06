import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "../components/OtpInput";
import Button from "../components/Button";
import OtpHeader from "../components/OtpHeader";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
  };

  const handleBack = () => {
    navigate("/register");
  };

  return (
    <>
      <OtpHeader />
      <div className="flex justify-center items-center min-h-screen pb-48 ">
        <div className="w-[900px] h-[600px] bg-white p-8  flex flex-col items-center">
          <div onClick={handleBack} className="cursor-pointer self-start ">
            <img src="/arrow-left-black.png" alt="Back" className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-10 self-start px-32 ">
            Masukkan OTP
          </h2>
          <p className="text-center mb-12 text-sm text-black">
            Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com
          </p>

          <OtpInput value={otp} onChange={handleOtpChange} />
          <p className="text-center text-sm text-black mt-6">
            Kirim Ulang OTP dalam 60 detik
          </p>

          <Button
            text="Simpan"
            color="bg-purple-800"
            onClick={handleSubmit}
            className="mt-32 w-[568px] rounded-2xl "
          />
        </div>
      </div>
    </>
  );
};

export default OtpPage;
