import React, { useState, useEffect } from 'react';

const BaronTime = ({ cooldown }) => {
  const [timeLeft, setTimeLeft] = useState(cooldown);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div id="baron-time" className="absolute w-[153px] h-[71px] left-[1766px] bg-[#535353] flex">
      <div className="flex items-center justify-center w-1/2 h-full text-white text-sm font-bold">
        {timeLeft > 0 ? formatTime(timeLeft) : "LIVE"}
      </div>
      <div className="flex items-center justify-center w-1/2 h-full ">
        <img
          src="https://via.placeholder.com/50/FFFFFF/000000?text=Icon"
          alt="Baron Icon"
          className="w-8 h-8"
        />
      </div>

    </div>
  );
};

export default BaronTime;
