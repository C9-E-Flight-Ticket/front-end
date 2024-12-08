import { cn } from "@/lib/utils";
import React from "react";

const TiketSold = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <img
        src="/ticket-sold.png"
        alt="Tiket Habis"
        style={{
          width: "237.76px",
          height: "153.26px",
          top: "427px",
          left: "612px",
          opacity: 1,
        }}
        className="mb-10"
      />
      <p className="text-sm font-semibold text-black mb-2">
        Maaf, Tiket terjual habis!
      </p>
      <p className="text-sm text-textPurple underline cursor-pointer hover:text-purple-900">
        Coba cari perjalanan lainnya!
      </p>
    </div>
  );
};

export default TiketSold;
