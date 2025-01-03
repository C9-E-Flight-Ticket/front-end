import { useState, useEffect } from "react";

export function useFlightDates(flightDate, isReturnToggleActive, stage) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const tempDates = [];
    const threeDaysBefore = new Date(
      isReturnToggleActive
        ? stage == "departure"
          ? flightDate.from
          : flightDate.to
        : flightDate
    );
    threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);

    for (let i = 0; i <= 7; i++) {
      const nextDay = new Date(threeDaysBefore);
      nextDay.setDate(nextDay.getDate() + i);
      tempDates.push(nextDay.toISOString());
    }

    setDates(tempDates);
  }, [isReturnToggleActive, stage]);

  return dates;
}
