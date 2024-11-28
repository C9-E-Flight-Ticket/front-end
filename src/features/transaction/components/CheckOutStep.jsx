const CheckoutSteps = ({ currentStepIndex }) => {
  const steps = ["Isi Data Diri", "Bayar", "Selesai"];

  return (
    <div className="w-full px-72 py-6 shadow-md bg-white">
      <div className="py-4 space-x-2 flex text-lg font-bold">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <span
              className={`${
                index <= currentStepIndex ? "text-black" : "text-gray-500"
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
  );
};

export default CheckoutSteps;
