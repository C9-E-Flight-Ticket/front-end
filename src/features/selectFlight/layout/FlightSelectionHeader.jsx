import SelectFlightButton from "../components/SelectFlightButton";

export default function FlightSelectionHeader() {
  return (
    <div className="w-full h-[338px] lg:h-[309px] fixed gap-0 z-50 bg-white">
      <div className="relative lg:top-28 top-24 left-1/2 transform translate-y-2 -translate-x-1/2 flex flex-col items-center sm:gap-2 md:gap-4">
        <div className="relative -top-4 sm:-left-0 md:-left-[250px] lg:-left-[350px] text-center text-black font-bold text-[18px] md:text-[20px]">
          Pilih Penerbangan
        </div>
        <SelectFlightButton />
      </div>
    </div>
  );
}
