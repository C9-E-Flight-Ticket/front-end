import { useSelector } from "react-redux";

const useCheckUserInput = () => {
  const { departureCity, returnCity, flightDate, passengers, seatClass } =
    useSelector((state) => state.homepage);

  const totalPassenger = passengers.adult + passengers.child + passengers.baby;
  const isValid =
    departureCity && returnCity && flightDate && totalPassenger && seatClass;

  return !!isValid;
};

export default useCheckUserInput;
