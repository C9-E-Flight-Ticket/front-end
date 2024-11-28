const CheckoutSteps = ({ currentStepIndex }) => {
  const steps = ["Isi Data Diri", "Bayar", "Selesai"];

  return (
    <div className="w-full bg-white px-72 py-6 shadow-md">
      <div className="flex text-lg font-bold space-x-2 py-4">
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
