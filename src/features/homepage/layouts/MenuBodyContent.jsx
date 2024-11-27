import SeatMenu from "@/features/homepage/components/SeatMenu";
import PassengerMenu from "@/features/homepage/components/PassengerMenu";
import InputGroupLayout from "@/features/homepage/components/InputGroupLayout";
import SearchArrivalCity from "@/features/homepage/components/SearchArrivalCity";
import SearchDepartureCity from "@/features/homepage/components/SearchDepartureCity";
import ToggleSwitchSearch from "@/features/homepage/components/ToggleSwitchSearch";
import FlightDate from "@/features/homepage/components/FlightDate";

const MenuBodyContent = () => {
  return (
    <div className="grid grid-cols-2 gap-y-14 gap-x-14">
      <div className="flex gap-10">
        <InputGroupLayout>
          <div className="flex gap-3 items-center">
            <img
              src="/plane-vector.png"
              alt="plane-vector"
              className="w-5 h-5"
            />
            <p className="text-[#8A8A8A] text-sm">From</p>
          </div>
          <SearchDepartureCity />
        </InputGroupLayout>
        <ToggleSwitchSearch />
      </div>
      <InputGroupLayout>
        <div className="flex gap-3 items-center">
          <img src="/plane-vector.png" alt="plane-vector" className="w-5 h-5" />
          <p className="text-[#8A8A8A] text-sm">To</p>
        </div>
        <SearchArrivalCity />
      </InputGroupLayout>
      <InputGroupLayout>
        <div className="flex gap-3 items-center">
          <img
            src="/calender-vector.png"
            alt="plane-vector"
            className="w-5 h-5"
          />
          <p className="text-[#8A8A8A] text-sm">Date</p>
        </div>
        <FlightDate />
      </InputGroupLayout>
      <div className="flex w-full gap-5">
        <InputGroupLayout>
          <div className="flex gap-3 items-center">
            <img
              src="/airline-seat-vector.png"
              alt="plane-vector"
              className="w-5 h-5"
            />
            <p className="text-[#8A8A8A] text-sm">To</p>
          </div>
          <PassengerMenu />
        </InputGroupLayout>
        <SeatMenu />
      </div>
    </div>
  );
};

export default MenuBodyContent;
