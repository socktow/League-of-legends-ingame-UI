import React, { useState } from "react";
import logo from "../assets/logo.webp";
import dragon from "../assets/dragon/fire.png";
import logoteam1 from "../assets/team/MESlogo_std.webp"; // Đảm bảo có logo của team 1
import logoteam2 from "../assets/team/Team_Secret_Whaleslogo_std.webp"; // Đảm bảo có logo của team 2

const Scoreboard = () => {
  // State theo dõi trạng thái active của Baron Power Play và Dragon Power Play
  const [baronPowerPlayActive, setBaronPowerPlayActive] = useState(false);
  const [dragonPowerPlayActive, setDragonPowerPlayActive] = useState(false);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full h-[100px] relative">
        {/* Baron Time */}
        <div
          id="baron-time"
          className="absolute w-[153px] h-[71px] left-[1766px] bg-[#535353]"
        />

        {/* Dragon Power Play */}
        {dragonPowerPlayActive && (
          <div
            id="dragon-power-play"
            className="absolute w-[199px] h-[71px] left-[1567px] bg-[#b3f549]"
          />
        )}

        {/* Dragon Time */}
        <div
          id="dragon-time"
          className="absolute w-[153px] h-[71px] bg-[#0b849e]"
        />

        {/* Baron Power Play */}
        {baronPowerPlayActive && (
          <div
            id="baron-power-play"
            className="absolute w-[352px] h-[71px] bg-[#be1e37]"
          />
        )}

        {/* Main Scoreboard */}
        <div
          id="main-scoreboard"
          className="absolute w-[1220px] h-[71px] left-[351px] bg-[#1c1c1c] flex justify-center items-center"
        >
          {/* Logo đặt ở giữa main scoreboard */}
          <img
            src={logo}
            alt="Logo"
            className="w-[70px] h-[70px] object-contain filter brightness-0 invert"
          />

          {/* Logo Team 1 ở góc trái */}
          <div className="absolute left-0 top-[50%] transform -translate-y-[50%]">
            <img
              src={logoteam1}
              alt="Team 1 Logo"
              className="w-[85px] h-[85px] object-contain filter brightness-0 invert"
            />
          </div>

          {/* Logo Team 2 ở góc phải */}
          <div className="absolute right-0 top-[50%] transform -translate-y-[50%]">
            <img
              src={logoteam2}
              alt="Team 2 Logo"
              className="w-[85px] h-[85px] object-contain filter brightness-0 invert"
            />
          </div>
        </div>

        {/* 2nd Scoreboard */}
        <div
          id="second-scoreboard"
          className="absolute w-[530px] h-[30px] top-[71px] left-[695px] bg-[#1c1c1c] flex justify-center items-center text-white relative"
        >
          {/* Hiển thị Game-Time */}
          <span className="text-xl">20:00</span>

          {/* Các con rồng ở góc trái */}
          <div className="absolute left-0 flex space-x-1">
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
          </div>

          {/* Các con rồng ở góc phải */}
          <div className="absolute right-0 flex space-x-1">
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
            <img
              src={dragon}
              alt="Dragon"
              className="w-[30px] h-[30px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
