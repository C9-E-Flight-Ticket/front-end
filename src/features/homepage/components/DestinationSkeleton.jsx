const DestinationSkeleton = () => {
  return (
    <div className="relative w-[170px] h-[194px] border rounded shadow bg-white transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer">
      <div className="w-[149.82px] h-[94.17px] mt-[7.53px] mx-[8.56px] bg-blue-gray-100 rounded animate-pulse"></div>
      <div className="block mx-[9px] mt-[10px]">
        <div className="bg-blue-gray-100 mb-2 w-[90%] h-[12px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[65%] h-[10px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[65%] h-[10px] rounded-xl animate-pulse"></div>
        <div className="bg-blue-gray-100 mb-2 w-[90%] h-[12px] rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default DestinationSkeleton;
