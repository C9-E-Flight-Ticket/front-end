import { ArrowsUpDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
import SortingModal from "./SortingModal";

const Sorting = () => {
  const [modalActivated, setModalActivated] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState("Harga Termurah");

  const handleActiveModal = () => {
    setModalActivated(true);
  };

  const handleCloseModal = () => {
    setModalActivated(false);
  };

  const handleSubmitSorting = (selected) => {
    setSelectedSorting(selected);
  };

  return (
    <>
      <div className="absolute w-[968px] h-[48px] top-[330px] left-1/2 transform -translate-x-1/2 pr-8 py-2 flex justify-end items-center z-40">
        <button
          onClick={handleActiveModal}
          className="h-8 border border-[#A06ECE] text-[#7126B5] rounded-2xl px-1"
        >
          <div className="flex">
            <div className="py-[2px] pl-1 w-[16.67px] h-[16.67px]">
              <ArrowsUpDownIcon />
            </div>
            <div className="text-xs px-2">
              {selectedSorting.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </button>
      </div>

      {modalActivated && (
        <SortingModal
          closeModal={handleCloseModal}
          submitSorting={handleSubmitSorting}
          value={selectedSorting}
        />
      )}
    </>
  );
};

export default Sorting;
