import FlightCard from "./FlightCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDepartureFlight,
  changeFlightStage,
  changeReturnFlight,
} from "@/services/flightSlice";
import { switchSearchCity } from "@/services/homepageSlice";

export default function AccordionFlight({
  flightData,
  setSelectedDepartureFlight,
  setOpen,
  handleOpen,
  open,
}) {
  const { stage } = useSelector((state) => state.flight);
  const { isReturnToggleActive } = useSelector((state) => state.homepage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectDeparture = (flight) => {
    setSelectedDepartureFlight(flight);
    setOpen(null);

    if (isReturnToggleActive) {
      dispatch(changeFlightStage("return"));
      dispatch(switchSearchCity());
    } else {
      navigate("/transaction");
    }

    dispatch(changeDepartureFlight(flight.id));
  };

  const handleSelectReturn = (flight) => {
    dispatch(changeReturnFlight(flight.id));
    dispatch(changeFlightStage("departure"));
    dispatch(switchSearchCity());

    navigate("/transaction");
  };

  return (
    <div className="flex flex-col items-center lg:space-y-5 space-y-3 lg:py-5 relative">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4 px-5 sm:px-10 lg:px-24 pt-0 sm:pt-0 md:pt-4 lg:py-0 max-w-full">
          {stage === "departure"
            ? "Pilih Tiket Keberangkatan"
            : "Pilih Tiket Kepulangan"}
        </h2>
      </div>
      {flightData.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          open={open}
          handleOpen={handleOpen}
          onSelectFlight={
            stage === "departure" ? handleSelectDeparture : handleSelectReturn
          }
        />
      ))}
    </div>
  );
}
