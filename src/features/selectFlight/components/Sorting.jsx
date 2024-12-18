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
      <div
        className={`w-full lg:absolute lg:top-[330px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-40
    lg:w-[968px] lg:h-[48px] lg:pr-8 lg:py-2 lg:flex lg:justify-end lg:items-center 
    fixed bottom-0 lg:bottom-auto lg:bg-transparent py-2 left-80`}
      >
        <button
          onClick={handleActiveModal}
          className="h-8 border bg-white border-[#A06ECE] text-[#7126B5] rounded-2xl px-1 fixed bottom-2 right-2 lg:bottom-auto lg:right-auto lg:left-[840px] lg:top-0"
        >
          <div className="flex items-center">
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
