import ModalMenuLayout from "@/features/homepage/components/ModalMenuLayout";
import PassengerItem from "@/features/homepage/components/PassengerItem";
import { updatePassengers } from "@/services/slices/homepageSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PassengerMenu = () => {
  const { passengers } = useSelector((state) => state.homepage);

  const [tempPassenger, setTempPassenger] = useState({
    adult: 0,
    child: 0,
    baby: 0,
  });

  const dispatch = useDispatch();

  // sync state when user back to homepage
  useEffect(() => setTempPassenger(passengers), [passengers]);

  function handleSave() {
    dispatch(updatePassengers(tempPassenger));
  }

  function handleMenuClose() {
    setTempPassenger(passengers);
  }

  return (
    <ModalMenuLayout
      value={`${
        passengers.adult + passengers.child + passengers.baby
      } Penumpang`}
      label="Passengers"
      onSave={handleSave}
      onMenuClose={handleMenuClose}
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
