import ModalMenuLayout from "@/features/homepage/components/ModalMenuLayout";
import SeatItem from "@/features/homepage/components/SeatItem";
import { chooseSeatClass } from "@/services/homepageSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SeatMenu = () => {
  const { seatClass } = useSelector((state) => state.homepage);
  const [tempActive, setTempActive] = useState("Economy");

  const dispatch = useDispatch();

  function handleSave() {
    dispatch(chooseSeatClass(tempActive));
  }

  function handleMenuClose() {
    setTempActive(seatClass);
  }

  return (
    <ModalMenuLayout
      value={seatClass}
      label="Seat Class"
      marginFromTop={0}
      onSave={handleSave}
      onMenuClose={handleMenuClose}
    >
      <SeatItem
        name="Economy"
        active={tempActive}
        setActive={setTempActive}
        price={4950000}
      />
      <hr className="mx-5 border-t-borderGrey outline-none" />
      <SeatItem
        name="Premium Economy"
        active={tempActive}
        setActive={setTempActive}
        price={7550000}
      />
      <hr className="mx-5 border-t-borderGrey outline-none" />
      <SeatItem
        name="Business"
        active={tempActive}
        setActive={setTempActive}
        price={29220000}
      />
      <hr className="mx-5 border-t-borderGrey outline-none" />
      <SeatItem
        name="First Class"
        active={tempActive}
        setActive={setTempActive}
        price={87620000}
      />
      <hr className="mx-5 border-t-borderGrey outline-none" />
    </ModalMenuLayout>
  );
};

export default SeatMenu;
