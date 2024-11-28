import React from "react";

const SaveButton = ({ setIsClicked }) => {
  return (
    <div className="w-10/12 mx-auto">
      <button
        className="w-full bg-textPurple text-white p-2 rounded-md"
        onClick={() => {
          setIsClicked((prev) => !prev);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Simpan
      </button>
    </div>
  );
};

export default SaveButton;
