import InputField from "@/features/homepage/components/InputField";
import SeatMenu from "@/features/homepage/components/SeatMenu";
import PassengerMenu from "@/features/homepage/components/PassengerMenu";
import InputGroupLayout from "@/features/homepage/components/InputGroupLayout";

const MenuBodyContent = () => {
  return (
    <div className="grid grid-cols-2 gap-y-8 gap-x-14">
      <InputGroupLayout>
        <div className="flex gap-3 items-center">
          <img src="/plane-vector.png" alt="plane-vector" className="w-5 h-5" />
          <p className="text-[#8A8A8A] text-sm">From</p>
        </div>
        <InputField placeholder={"Jakarta (JKTA)"} width="100%" />
      </InputGroupLayout>
      <InputGroupLayout>
        <div className="flex gap-3 items-center">
          <img src="/plane-vector.png" alt="plane-vector" className="w-5 h-5" />
          <p className="text-[#8A8A8A] text-sm">To</p>
        </div>
        <InputField placeholder={"Melbourne (MLB)"} width="100%" />
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
        <InputField placeholder={"27 Maret 2024"} width="100%" />
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
