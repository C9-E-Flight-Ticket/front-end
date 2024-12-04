import SelectFlightButton from "../components/SelectFlightButton";

export default function FlightSelectionHeader() {
  return (
    <div className="w-full h-[325px] fixed gap-0 z-50 bg-white">
      <div className="relative top-32 left-1/2 transform translate-y-2 -translate-x-1/2 flex flex-col items-center">
        <div className="relative -top-4 -left-[350px] pe-11 text-center text-black font-bold text-[20px]">
          Pilih Penerbangan
        </div>
        <SelectFlightButton />
      </div>
    </div>
  );
}
