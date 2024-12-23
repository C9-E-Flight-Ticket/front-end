import { jwtDecode } from "jwt-decode";

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

export const formatDateToDash = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const formatDateToUI = (date) => {
  const dateFormat = new Date(date);
  const options = { day: "numeric", month: "long", year: "numeric" };
  try {
    return dateFormat.toLocaleDateString("id-ID", options);
  } catch (error) {
    console.log(error);
    return "Pilih Tanggal";
  }
};

export const formattedTime = (date) => {
  const dateFormat = new Date(date);
  const hours = dateFormat.getHours();
  let minutes = dateFormat.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}.${minutes}`;
};

export const convertLocalDateToUTC = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
};

export const formatNumberToRupiah = (number) => {
  return new Intl.NumberFormat("id-ID").format(number || 600000);
};

export const dateToTime = (date) => {
  const dateFormat = new Date(date);
  const hours = dateFormat.getHours().toString().padStart(2, "0");
  const minutes = dateFormat.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const decodeJWT = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};
