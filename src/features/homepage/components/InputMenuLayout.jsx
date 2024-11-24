import InputField from "@/features/homepage/components/InputField";
import SelectField from "@/features/homepage/components/SelectField";
import InputGroupLayout from "@/features/homepage/components/InputGroupLayout";

const InputMenuLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8">
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
      <InputGroupLayout>
        <div className="flex gap-3 items-center">
          <img
            src="/airline-seat-vector.png"
            alt="plane-vector"
            className="w-5 h-5"
          />
          <p className="text-[#8A8A8A] text-sm">To</p>
        </div>
        <SelectField width="100%" label="Passengers" value="react" />
      </InputGroupLayout>
    </div>
  );
};

export default InputMenuLayout;
