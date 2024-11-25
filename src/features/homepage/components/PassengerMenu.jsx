import ModalMenuLayout from "@/features/homepage/components/ModalMenuLayout";
import PassengerItem from "@/features/homepage/components/PassengerItem";
import { useState } from "react";

const PassengerMenu = () => {
  const [realPassenger, setRealPassenger] = useState({
    adult: 0,
    child: 0,
    baby: 0,
  });
  const [tempPassenger, setTempPassenger] = useState({
    adult: 0,
    child: 0,
    baby: 0,
  });

  function handleSave() {
    setRealPassenger(tempPassenger);
  }

  return (
    <ModalMenuLayout
      value={`${
        realPassenger.adult + realPassenger.child + realPassenger.baby
      } Penumpang`}
      label="Passengers"
      onSave={handleSave}
    >
      <PassengerItem
        img="/adult-passenger.png"
        title="Dewasa"
        id="adult"
        description="12 tahun keatas"
        tempPassenger={tempPassenger}
        setTempPassenger={setTempPassenger}
      />
      <PassengerItem
        img="/child-passenger.png"
        title="Anak"
        id="child"
        description="2 - 11 tahun"
        tempPassenger={tempPassenger}
        setTempPassenger={setTempPassenger}
      />
      <PassengerItem
        img="/baby-passenger.png"
        title="Bayi"
        id="baby"
        description="Dibawah 2 tahun"
        tempPassenger={tempPassenger}
        setTempPassenger={setTempPassenger}
      />
    </ModalMenuLayout>
  );
};

export default PassengerMenu;
