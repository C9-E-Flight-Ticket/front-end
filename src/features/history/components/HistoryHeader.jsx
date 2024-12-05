const HistoryHeader = () => {
  return (
    <>
      <div className="absolute top-[131px] left-[260px] text-xl font-bold">
        Riwayat Pemesanan
      </div>
      <div className="absolute top-[185px] left-1/2 -translate-x-1/2 w-[968px] py-2 px-4 flex gap-3">
        <div className="w-[777px] h-[50px] bg-[#A06ECE] py-[5px] px-4 rounded-xl flex gap-2 text-white">
          <button>
            <img src="/arrow-left.png" />
          </button>
          <div className="py-2 px-[10px]">Beranda</div>
        </div>
        <div className="w-[147px] h-[50px] py-[5px] px-[6px] flex items-center gap-4">
          <button className="h-[32px] rounded-2xl px-1 border border-[#7126B5]">
            <div className="flex">
              <div className="py-[2px] pl-1 flex items-center">
                <img className="w-[16.67px] h-[16.67px]" src="/filter.svg" />
              </div>
              <div className="px-2 text-base">Filter</div>
            </div>
          </button>
          <button>
            <img src="/search.svg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryHeader;
