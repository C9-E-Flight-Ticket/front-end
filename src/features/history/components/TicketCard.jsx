import React from "react";
import { Card } from "@material-tailwind/react";

const TicketCard = () => {
  return (
    <Card className="w-[468px] h-[204px] mt-6 ml-36 py-[12px] px-[16px] rounded-[10px] border-[2px] border-lightGray ">
      <p className="w-[70px] h-[28px] my-[4px] rounded-[16px] text-[14px] font-light flex items-center justify-center bg-lightGreen text-white">
        Issued
      </p>
      <div className="flex py-[16px]  ">
        <div className="flex w-[120px] h-[60px]">
          <img src="map.png" alt="map.png" className="w-[24px] h-[24px]" />
          <div className=" ml-[8px] text-black">
            <p className="font-bold text-[14px]">Jakarta</p>
            <p className="text-[12px]">5 Maret 2023</p>
            <p className="text-[12px]">19:10</p>
          </div>
        </div>
        <div className="mx-[16px] ">
          <img src="arrow-1.png" alt="arrow-1.png" className="w-[164px] " />
        </div>
        <div className="flex w-[120px] h-[60px]">
          <img src="map.png" alt="map.png" className="w-[24px] h-[24px]" />
          <div className=" ml-[8px] text-black">
            <p className="font-bold text-[14px]">Melbourne</p>
            <p className="text-[12px]">5 Maret 2023</p>
            <p className="text-[12px]">19:10</p>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 ">
        <div className="w-[161px] h[36px] py-[8px] ">
          <p className="text-[12px] font-bold text-black">Booking Code:</p>
          <p className="text-[12px] text-black">6723y2GHK</p>
        </div>
        <div className="w-[161px] h[36px] py-[8px] px-[8px] ">
          <p className="text-[12px] font-bold text-black">Class:</p>
          <p className="text-[12px] text-black">Economy</p>
        </div>
        <div className="w-[98px] h-[36x] py-[8px] flex items-center ">
          <p className="text-[14px] text-primaryPurple font-bold ">
            IDR 9.850.000
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard;
