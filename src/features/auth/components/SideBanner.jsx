import React from "react";

const SideBanner = () => {
  return (
    <div className="basis-1/2 relative">
      <img
        src="/bg-ungu.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 transform -translate-x-60">
        <h1 className="text-4xl font-bold text-purple-700">Tiketku</h1>
        <p className="text-lg text-purple-500">Your Traveling Partner</p>
      </div>
    </div>
  );
};

export default SideBanner;
