import ModalMenuLayout from "@/features/homepage/components/ModalMenuLayout";
import SeatItem from "@/features/homepage/components/SeatItem";
import { useState } from "react";

const SeatMenu = () => {
  const [active, setActive] = useState("");
  return (
    <ModalMenuLayout value={"Business"} label="Seat Class" marginFromTop="0px">
      <SeatItem
        name="Economy"
        active={active}
        setActive={setActive}
        price={4950000}
      />
      <hr className="mx-5 py border-t-borderGrey outline-none" />
      <SeatItem
        name="Premium Economy"
        active={active}
        setActive={setActive}
        price={7550000}
      />
      <hr className="mx-5 py border-t-borderGrey outline-none" />
      <SeatItem
        name="Business"
        active={active}
        setActive={setActive}
        price={29220000}
      />
      <hr className="mx-5 py border-t-borderGrey outline-none" />
      <SeatItem
        name="First Class"
        active={active}
        setActive={setActive}
        price={87620000}
      />
      <hr className="mx-5 py border-t-borderGrey outline-none" />
    </ModalMenuLayout>
  );
};

export default SeatMenu;
