import React, { useEffect, useState } from "react";
import loadingImage from "/loading.png";

function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 3 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-white">
      <div className="relative w-[236px] h-[69px] bg-gray-300 rounded-3xl overflow-hidden">
        <div
          className="absolute h-full bg-purple-700 transition-all"
          style={{ width: `${progress}%` }}
        />
        <img
          src={loadingImage}
          alt="Loading"
          className="absolute w-24 h-auto"
          style={{
            left: `${progress}%`,
            transform: "translateX(-100%)",
            transition: "left 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}

export default LoadingBar;
