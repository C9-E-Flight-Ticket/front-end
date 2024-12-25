import React from "react";

const ConfirmUpdateModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed -inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6">
        <h3 className="text-lg font-bold text-black mb-4">
          Konfirmasi Perubahan Profil
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Apakah Anda yakin ingin menyimpan perubahan pada profil Anda?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border bg-[#d70202] rounded-xl text-white hover:bg-[#690000] "
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#5dc242] rounded-xl text-white hover:bg-[#2d5d1f]"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUpdateModal;
