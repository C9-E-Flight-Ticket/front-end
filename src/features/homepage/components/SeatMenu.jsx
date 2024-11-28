import ModalMenuLayout from "@/features/homepage/components/ModalMenuLayout";
import SeatItem from "@/features/homepage/components/SeatItem";
import { useState } from "react";

const SeatMenu = () => {
  const [active, setActive] = useState("Economy");
  const [tempActive, setTempActive] = useState("Economy");

  function handleSave() {
    setActive(tempActive);
  }

  function handleMenuClose() {
    setTempActive(active);
  }

  return (
    <ModalMenuLayout
      value={active}
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
