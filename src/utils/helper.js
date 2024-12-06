export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getDayName = (date) => {
  const newDate = new Date(date);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[newDate.getDay()];
};

export const formatDateToForwardSlash = (inDate) => {
  const date = new Date(inDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formattedDateToNewDate = (formattedDate) => {
  return new Date(formattedDate);
};
