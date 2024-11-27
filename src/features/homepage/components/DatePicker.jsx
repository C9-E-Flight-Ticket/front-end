import { DayPicker } from "react-day-picker";

const DatePicker = ({ date, setDate, toggleIsOn }) => {
  return (
    <DayPicker
      mode={toggleIsOn ? "range" : "single"}
      // max={2}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      pagedNavigation
      showOutsideDays
      className="border-0 h-[350px]"
      classNames={{
        months: "flex gap-8 pe-6",
        // month: "w-full",
        month_caption: "flex justify-center py-2 mb-4 relative items-center",
        caption_label: "text-sm font-medium text-black font-semibold",
        // nav: "",
        button_previous: "absolute left-1.5",
        button_next: "absolute right-1.5",
        month_grid: "w-full border-collapse",
        weekdays: "flex font-medium text-gray-900",
        weekday: "m-0.5 w-9 font-normal text-sm text-gray-600",
        week: "flex w-full mt-2 items-center",
        // weeks: "mx-auto",
        day: "h-9 w-10 p-0 font-normal text-black rounded-lg hover:bg-primaryPurple hover:text-white focus:ring-2 focus:ring-purple-400 items-center flex justify-center",
        day_button: "w-full h-full",
        selected: "rounded-md bg-primaryPurple text-white",
        today: "rounded-md bg-gray-200",
        outside: "text-gray-400 opacity-50 hover:bg-transparent focus:ring-0",
        range_start: "rounded-l-md rounded-r-none bg-primaryPurple text-white",
        range_middle:
          "rounded-none bg-softPurple hover:bg-purple-700 !text-black",
        range_end: "rounded-r-md rounded-l-none bg-primaryPurple text-white",
      }}
    />
  );
};

export default DatePicker;
