import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen" >
      <img
        src="cart-shopping.png"
        alt="cart-shopping.png"
        className="w-[204px] h-[208px] md:mt-[100px] "
      />
      <div className="py-[10px] pl-[12px] pr-[2px] flex justify-center items-center flex-col">
        <p className="text-[14px] font-normal text-primaryPurple ">
          Oops! Riwayat pesanan kosong!
        </p>
        <p className="text-[14px] font-normal text-black">
          Anda belum melakukan pemesanan penerbangan
        </p>
      </div>

      <Button
        className="w-[347px] h-[48px] mt-[26px] rounded-[12px] bg-textPurple text-white"
        onClick={() => navigate("/")}
      >
        Cari Penerbangan
      </Button>
    </div>
  );
};

export default HistoryNotFound;
