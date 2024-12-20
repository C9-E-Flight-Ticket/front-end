import { Button } from "@material-tailwind/react";

const QRModal = ({ open, onClose, qrCode, onDownload, isLoading }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Ticket QR Code</h2>
          {/* QR Code */}
          {qrCode ? (
            <img src={qrCode} alt="QR Code" className="w-40 h-40" />
          ) : (
            <p className="text-gray-500">No QR Code provided</p>
          )}
          <Button
            color="deep-purple"
            className="mt-10"
            onClick={onDownload}
            disabled={isLoading}
          >
            {isLoading ? "Mendowload..." : "Download"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
