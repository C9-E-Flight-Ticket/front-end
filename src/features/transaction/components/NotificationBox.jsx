import { useState, useEffect } from "react";

const NotificationBox = ({ message, initialTime, className, isClicked }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    if (!initialTime || !isClicked) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialTime, isClicked]);
  const formatTime = (time) => {
    if (!initialTime) return;
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div
      className={`absolute top-28 left-1/2 w-8/12 p-2 mt-10 text-center font-semibold rounded-lg text-white ${className}`}
      style={{ transform: "translateX(-50%)" }}
    >
      {message} <span className="font-bold">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default NotificationBox;
