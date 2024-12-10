import React, { useState } from "react";

const PaymentMethod = () => {
  const [activeAccordion, setActiveAccordion] = useState("Credit Card");

  const toggleAccordion = (method) => {
    setActiveAccordion((prev) => (prev === method ? "" : method));
  };
  return (
    <div className="w-full p-6">
      <h3 className="text-lg font-bold mb-4">Isi Data Pembayaran</h3>
      <div className="mb-4">
        <div
          className={`p-4 cursor-pointer rounded-md flex justify-between items-center ${
            activeAccordion === "Gopay"
              ? "bg-textPurple  text-white"
              : "bg-darkgrey  text-white"
          }`}
          onClick={() => toggleAccordion("Gopay")}
        >
          Gopay
          <span
            className={`transform transition-transform ${
              activeAccordion === "Gopay" ? "rotate-0" : "rotate-180"
            }`}
          >
            <img src="/accordion.svg" alt="accordion" />
          </span>
        </div>
        {activeAccordion === "Gopay" && (
          <div className="p-4">
            <p>
              Pindai kode QR di bawah ini untuk melakukan pembayaran menggunakan
              Gopay.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-300 mt-4">QR Code</div>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div
          className={`p-4 cursor-pointer rounded-md flex justify-between items-center ${
            activeAccordion === "Virtual Account"
              ? "bg-textPurple  text-white"
              : "bg-darkgrey  text-white"
          }`}
          onClick={() => toggleAccordion("Virtual Account")}
        >
          Virtual Account
          <span
            className={`transform transition-transform ${
              activeAccordion === "Virtual Account" ? "rotate-0" : "rotate-180"
            }`}
          >
            <img src="/accordion.svg" alt="accordion" />
            <polyline points="6 9 12 15 18 9" />
          </span>
        </div>
        {activeAccordion === "Virtual Account" && (
          <div className="p-4 border-t">
            <p>
              Transfer jumlah berikut ke nomor virtual account di bawah ini:
            </p>
            <div className="mt-4 p-4 bg-gray-100 border rounded-md">
              <p>Bank: BCA</p>
              <p>Nomor Rekening: 1234567890</p>
              <p>Total: IDR 9,850,000</p>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div
          className={`p-4 cursor-pointer rounded-md flex justify-between items-center ${
            activeAccordion === "Credit Card"
              ? "bg-textPurple  text-white"
              : "bg-darkgrey  text-white"
          }`}
          onClick={() => toggleAccordion("Credit Card")}
        >
          Credit Card
          <span
            className={`transform transition-transform ${
              activeAccordion === "Credit Card" ? "rotate-0" : "rotate-180"
            }`}
          >
            <img src="/accordion.svg" alt="accordion" />
          </span>
        </div>
        {activeAccordion === "Credit Card" && (
          <div className="flex items-center justify-center">
            <div className="p-4 border-t lg:w-3/4">
              <form className="flex flex-col gap-4">
                <img
                  src="/payment-option.png"
                  alt="payment-option "
                  className="py-4"
                />
                <div>
                  <label className="block text-sm font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4480 0000 0000 0000"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <button className="w-full bg-textPurple text-white p-2 rounded-md">
        Bayar
      </button>
    </div>
  );
};

export default PaymentMethod;
