import MainLayout from "@/layouts/MainLayout";
import SelectFlightButton from "../components/SelectFlightButton";
import Sorting from "../components/Sorting";

export default function FlightSelectionHeader() {
  return (
    <div className="w-full h-[331px] relative gap-0 opacity-100 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]">
      <div className="absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 flex flex-col items-center">
        <div className="relative -top-9 -left-96 pe-11 text-center text-black font-bold text-[20px]">
          Pilih Penerbangan
        </div>
        <SelectFlightButton />
      </div>
    </div>
  );
}
