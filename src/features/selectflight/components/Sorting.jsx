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
