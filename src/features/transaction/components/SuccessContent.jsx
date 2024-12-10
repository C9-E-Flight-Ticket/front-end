import React from "react";

const SuccessContent = () => {
  return (
    <div className="mt-20 flex items-center justify-center flex-col">
      <img
        src="/cart-shopping.png"
        alt="cart-shopping"
        className="w-1/6 mb-5"
      />
      <p className="text-lg font-medium text-textPurple">Selamat!</p>
      <p className="text-lg font-medium text-black">
        Transaksi Pembayaran Sukses
      </p>
      <button className="w-1/4 p-3 mt-10 rounded-2xl text-xl font-medium text-white bg-textPurple">
        Terbitkan Tiket
      </button>
      <button className="w-1/4 p-3 mt-3 rounded-2xl text-xl font-medium text-white bg-veryLightPurple">
        Cari Penerbangan Lain
      </button>
    </div>
  );
};

export default SuccessContent;
