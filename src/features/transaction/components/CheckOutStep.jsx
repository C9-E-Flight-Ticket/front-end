const CheckoutSteps = ({ currentStepIndex }) => {
  const steps = ["Isi Data Diri", "Bayar", "Selesai"];

  return (
    <div className="fixed z-50 top-0 w-full h-48 md:h-52 shadow-md bg-white flex justify-center md:justify-start">
      <div className="relative top-[90px] md:top-[120px] md:left-[15%] space-x-2 flex text-base lg:text-lg font-bold h-fit">
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
