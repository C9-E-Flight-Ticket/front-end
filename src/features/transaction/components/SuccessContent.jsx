import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessContent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <img
        src="/cart-shopping.png"
        alt="cart-shopping"
        className="w-[204px] h-[208px]"
      />
      <div className="py-[10px] pl-[12px] pr-[2px] flex justify-center items-center flex-col">
        <p className="text-[14px] font-normal text-primaryPurple ">Selamat!</p>
        <p className="text-[14px] font-normal text-black">
          Transaksi Pembayaran Sukses
        </p>
      </div>
      <Button
        className="w-[347px] h-[48px] mt-[26px] rounded-[12px] bg-textPurple text-white"
        onClick={() => navigate("/history")}
      >
        Terbitkan Tiket
      </Button>
      <Button
        className="w-[347px] h-[48px] mt-[12px] rounded-[12px] bg-veryLightPurple text-white"
        onClick={() => navigate("/")}
      >
        Cari Penerbangan Lain
      </Button>
    </div>
  );
};

export default SuccessContent;
