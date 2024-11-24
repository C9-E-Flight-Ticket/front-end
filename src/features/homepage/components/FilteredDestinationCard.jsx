const FilteredDestinationCard = ({
  from,
  destination,
  airline,
  departureDate,
  returnDate,
  price,
}) => {
  return (
    <div className="relative w-[166.94px] h-[194px] border rounded shadow-sm bg-white">
      <div className="absolute w-[72px] h-[24px] bg-[#A06ECE] rounded-tl-xl rounded-bl-xl top-[5px] right-[3px] flex items-center justify-center">
        <div className="text-white text-[10px] ml-2">50% OFF</div>
      </div>
      <div className="w-[149.82px] h-[94.17px] mt-[7.53px] mx-[8.56px]">
        <img
          className="rounded w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        />
      </div>
      <div className="block mx-[9px] mt-[10px]">
        <div className="text-[12px] font-medium">
          {from}
          {" -> "}
          {destination}
        </div>
        <div className="text-[10px] text-[#7126B5] font-bold">{airline}</div>
        <div className="text-[10px] font-medium">
          {departureDate} - {returnDate}
        </div>
        <div className="text-[12px] font-normal">
          Mulai dari{" "}
          <span className="text-[#FF0000] font-bold">IDR {price}</span>
        </div>
      </div>
    </div>
  );
};

export default FilteredDestinationCard;
