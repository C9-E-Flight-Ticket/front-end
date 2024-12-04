import React from "react";
import LoadingBar from "./LoadingBar";

function LoadingTicket() {
  return (
    <div className="w-[250px] h-[143px] flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-screen bg-white">
      <p className="text-center py-2">Mencari penerbangan terbaik... </p>
      <p className="text-center text-gray-600 p-2">Loading...</p>
      <LoadingBar />
    </div>
  );
}

export default LoadingTicket;
