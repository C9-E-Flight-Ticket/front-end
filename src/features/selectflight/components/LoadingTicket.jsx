import React from "react";
import LoadingBar from "./LoadingBar";

function LoadingTicket() {
  return (
    <div className="w-full h-[143px] flex flex-col items-center justify-center">
      <p className="text-center py-2">Mencari penerbangan terbaik... </p>
      <p className="text-center text-gray-600 p-2">Loading...</p>
      <LoadingBar />
    </div>
  );
}

export default LoadingTicket;
