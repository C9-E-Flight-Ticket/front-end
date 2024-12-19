const DestinationSkeleton = () => {
  return (
    <div className="mx-auto w-full relative max-w-[275px] min-w-[170px] min-h-[194px] border rounded shadow bg-white hover:cursor-pointer">
      <div className="min-w-[149.82px] h-[94.17px] mt-[7.53px] mx-[8.56px] bg-blue-gray-100 rounded animate-pulse"></div>
      <div className="block mx-[9px] mt-[10px]">
        <div className="bg-blue-gray-100 mb-2 w-[140px] h-[12px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[110px] h-[10px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[120px] h-[10px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[140px] h-[12px] rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default DestinationSkeleton;
