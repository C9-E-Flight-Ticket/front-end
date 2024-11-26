import React from "react";

const FlightDetail = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-lg font-bold text-black mb-1">Detail Penerbangan</h2>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg font-bold">07:00</p>
          <p className="text-sm text-black">3 Maret 2023</p>
          <p className="text-sm text-black">
            Soekarno Hatta - Terminal 1A Domestik
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Keberangkatan</p>
        </div>
      </div>
      <div className="mt-4 border-t pt-2">
        <p className="text-sm font-semibold text-black">Jet Air - Economy</p>
        <p className="text-lg font-bold">JT - 203</p>
        <div className="mt-2 text-sm text-black">
          <p>Baggage 20 kg</p>
          <p>Cabin baggage 7 kg</p>
          <p>In Flight Entertainment</p>
        </div>
      </div>
      <div className="mt-2 flex border-t pt-2 justify-between items-start">
        <div>
          <p className="text-lg font-bold">11:00</p>
          <p className="text-sm text-black">3 Maret 2023</p>
          <p className="text-sm text-black">Melbourne International Airport</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-purple-500">Kedatangan</p>
        </div>
      </div>
      <div className="mt-2 border-t pt-2">
        <h3 className="text-lg font-semibold text-black">Rincian Harga</h3>
        <div className="flex justify-between text-sm text-black mt-2">
          <p>2 Adults</p>
          <p>IDR 9.550.000</p>
        </div>
        <div className="flex justify-between text-sm text-black">
          <p>1 Baby</p>
          <p>IDR 0</p>
        </div>
        <div className="flex justify-between text-sm text-black">
          <p>Tax</p>
          <p>IDR 300.000</p>
        </div>
        <div className="flex justify-between text-lg font-bold text-black mt-2">
          <p>Total</p>
          <p>IDR 9.850.000</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
