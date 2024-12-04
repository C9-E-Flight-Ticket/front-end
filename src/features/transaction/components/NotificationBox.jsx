import { useState, useEffect } from "react";

const NotificationBox = ({
  message,
  initialTime,
  className,
  type = "count",
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!initialTime || type !== "count") return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      console.log("time");
    }, 1000);
    return () => clearInterval(timer);
  }, [initialTime, type]);

  const formatTime = (time) => {
    if (!initialTime) return;
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div
      className={`fixed z-[99] top-28 left-1/2 w-8/12 p-2 mt-10 text-center font-normal rounded-lg text-white ${className} ${
        type === "count" ? "bg-red-500" : "bg-green-500"
      }`}
      style={{ transform: "translateX(-50%)" }}
    >
      {message}{" "}
      {type === "count" && (
        <span className="font-bold">{formatTime(timeLeft)}</span>
      )}
    </div>
  );
};

export default NotificationBox;
