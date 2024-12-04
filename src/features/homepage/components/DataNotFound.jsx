const DataNotFound = ({ destination }) => {
  return (
    <div className="w-full h-[194px] border rounded-xl flex justify-center items-center bg-[#E2D4F0] mt-5">
      {/* <div className="mt-9 w-full flex justify-center">
        <img className="h-20" src="/404.png" />
      </div> */}
      <div className="block text-center">
        <div className="text-[#7c40b4] text-6xl font-bold">404</div>
        <div className="text-[#7126B5]">
          Maaf... data penerbangan dengan destinasi {destination} tidak
          ditemukan
        </div>
      </div>
    </div>
  );
};

export default DataNotFound;
