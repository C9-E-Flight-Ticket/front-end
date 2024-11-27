const FilteredDestinationCard = ({
  from,
  destination,
  airline,
  departureDate,
  returnDate,
  price,
}) => {
  return (
    <div className="relative w-[170px] h-[194px] border rounded shadow bg-white transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer">
      <div className="absolute w-[72px] h-[24px] bg-[#A06ECE] rounded-tl-xl rounded-bl-xl top-[5px] right-[3px] flex items-center justify-center">
        <div className="text-white text-[10px] ml-2">50% OFF</div>
      </div>
      <div className="w-[149.82px] h-[94.17px] mt-[7.53px] mx-[8.56px]">
        <img
          className="rounded w-full h-full object-cover"
          src="/banner-bangkok.png"
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
