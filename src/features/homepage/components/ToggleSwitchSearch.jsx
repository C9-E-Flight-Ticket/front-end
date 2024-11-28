import { switchSearchCity } from "@/services/homepageSlice";
import { useDispatch } from "react-redux";

const ToggleSwitchSearch = () => {
  const dispatch = useDispatch();

  function handleSwitch() {
    dispatch(switchSearchCity());
  }
  return (
    <button className="w-[40px]">
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
