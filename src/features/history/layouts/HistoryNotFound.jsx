const HistoryNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src="cart-shopping.png"
        alt="cart-shopping.png"
        className="w-[204px] h-[208px] "
      />
      <div className="py-[10px] pl-[12px] pr-[2px] flex justify-center items-center flex-col">
        <p className="text-[14px] font-normal text-primaryPurple ">
          Oops! Riwayat pesanan kosong!
        </p>
        <p className="text-[14px] font-normal text-black">
          Anda belum melakukan pemesanan penerbangan
        </p>
      </div>

      <button className="w-[347px] h-[48px] mt-[26px] rounded-[12px] bg-textPurple text-white ">
        Cari Penerbangan
      </button>
    </div>
  );
};

export default HistoryNotFound;
