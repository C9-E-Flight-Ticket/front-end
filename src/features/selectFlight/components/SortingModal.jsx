import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const SortingModal = ({
  closeModal,
  submitSorting,
  value,
  choices,
  choicesValue,
}) => {
  const [sortingValue, setSortingValue] = useState(
    choices[choicesValue.indexOf(value)]
  );
  const [selected, setSelected] = useState(
    choices[choicesValue.indexOf(value)]
  );

  const handleSubmit = () => {
    setSortingValue(selected);
    submitSorting(choicesValue[choices.indexOf(selected)]);
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl w-[90%] max-w-[400px]">
          <div className="flex justify-end py-[14px] px-4 border-b">
            <button onClick={closeModal}>
              <div className="w-4">
                <XMarkIcon />
              </div>
            </button>
          </div>
          {choices.map((choice, i) => (
            <div key={i}>
              <button
                onClick={() => setSelected(choice)}
                className={`w-full px-4 ${
                  selected === choice ? "bg-[#7126B5] text-white" : ""
                }`}
              >
                <div className="flex items-center justify-between py-3 text-start text-sm border-b">
                  <div>
                    <span className="font-bold">{choice.split(" ")[0]}</span> -{" "}
                    {choice.split(" ").slice(1).join(" ")}
                  </div>

                  <div className="w-6 h-6">
                    {sortingValue === choice && <img src="/ceklis.png" />}
                  </div>
                </div>
              </button>
            </div>
          ))}

          <div className="px-4 py-3 flex justify-end">
            <button
              onClick={() => handleSubmit()}
              className="w-[150px] bg-[#7126B5] hover:bg-[#41126c] transition duration-300 rounded-xl p-3 text-base text-white"
            >
              Pilih
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingModal;
