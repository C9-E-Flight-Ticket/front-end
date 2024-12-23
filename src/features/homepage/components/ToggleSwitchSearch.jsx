import { switchSearchCity } from "@/services/slices/homepageSlice";
import { useDispatch } from "react-redux";

const ToggleSwitchSearch = () => {
  const dispatch = useDispatch();

  function handleSwitch() {
    dispatch(switchSearchCity());
  }
  return (
    <button className="w-[30px] lg:w-[35px] absolute xl:static right-0">
      <img
        src="/return.png"
        alt="return"
        className="w-full"
        onClick={handleSwitch}
      />
    </button>
  );
};

export default ToggleSwitchSearch;
