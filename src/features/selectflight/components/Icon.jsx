import React from "react";

export default function Icon({ id, open }) {
  return (
    <img
      src="/neutral-button.png"
      alt="Neutral Button"
      className={`w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full ${
        open === id ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
    />
  );
}
