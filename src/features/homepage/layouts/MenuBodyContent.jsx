import SeatMenu from "@/features/homepage/components/SeatMenu";
import PassengerMenu from "@/features/homepage/components/PassengerMenu";
import InputGroupLayout from "@/features/homepage/components/InputGroupLayout";
import SearchReturnCity from "@/features/homepage/components/SearchReturnCity";
import SearchDepartureCity from "@/features/homepage/components/SearchDepartureCity";
import ToggleSwitchSearch from "@/features/homepage/components/ToggleSwitchSearch";
import FlightDate from "@/features/homepage/components/FlightDate";

const MenuBodyContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-5 lg:gap-x-3 xl:gap-x-10">
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 lg:gap-x-10">
        <div className="flex gap-10 relative">
          <InputGroupLayout>
            <div className="flex gap-3 items-center w-20 lg:w-auto">
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
          <div className="flex gap-3 items-center w-20 lg:w-auto">
            <img
              src="/plane-vector.png"
              alt="plane-vector"
              className="w-5 h-5"
            />
            <p className="text-[#8A8A8A] text-sm">To</p>
          </div>
          <SearchReturnCity />
        </InputGroupLayout>
      </div>
      <InputGroupLayout>
        <div className="grid grid-cols-1 gap-y-5 justify-between h-full">
          <div className="flex gap-3 items-center w-20 lg:w-auto">
            <img
              src="/calender-vector.png"
              alt="plane-vector"
              className="w-5 h-5"
            />
            <p className="text-[#8A8A8A] text-sm">Date</p>
          </div>
          <div className="flex gap-3 items-center w-20 lg:w-auto md:hidden">
            <img
              src="/calender-vector.png"
              alt="plane-vector"
              className="w-5 h-5"
            />
            <p className="text-[#8A8A8A] text-sm">Date</p>
          </div>
        </div>
        <FlightDate />
      </InputGroupLayout>
      <InputGroupLayout>
        <div className="gap-3 items-center w-24 hidden sm:flex">
          <img
            src="/airline-seat-vector.png"
            alt="plane-vector"
            className="w-5 h-5"
          />
          <p className="text-[#8A8A8A] text-sm">To</p>
        </div>
        <PassengerMenu />
        <SeatMenu />
      </InputGroupLayout>
    </div>
  );
};

export default MenuBodyContent;
