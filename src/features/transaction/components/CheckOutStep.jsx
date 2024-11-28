import React from "react";

const CheckoutSteps = ({ currentStep }) => {
  const steps = ["Isi Data Diri", "Bayar", "Selesai"];
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-white p-4 shadow-md">
        <div className="flex items-center text-lg font-bold space-x-4 py-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center" z>
              <span
                className={`${
                  currentStep === step ? "text-black" : "text-gray-500"
                }`}
              >
                {step}
              </span>
              {index < steps.length - 1 && (
                <span className="mx-2 text-gray-400">›</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
