import { useState, useEffect } from "react";

export function useFlightDates(flightDate, isReturnToggleActive) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const tempDates = [];
    const threeDaysBefore = new Date(
      isReturnToggleActive ? flightDate.from : flightDate
    );
    threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);

    for (let i = 0; i <= 7; i++) {
      const nextDay = new Date(threeDaysBefore);
      nextDay.setDate(nextDay.getDate() + i);
      tempDates.push(nextDay.toISOString());
    }

    setDates(tempDates);
  }, [isReturnToggleActive, flightDate]);

  return dates;
}
