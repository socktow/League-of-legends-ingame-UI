import React from "react";
import logo from "../../../assets/logo.webp";
import logoteam1 from "../../../assets/team/MESlogo_std.webp";
import logoteam2 from "../../../assets/team/Team_Secret_Whaleslogo_std.webp";

const MainScoreboard = ({ blueTeam, redTeam }) => (
  <div
    id="main-scoreboard"
    className="absolute w-[1220px] h-[71px] left-[351px] bg-[#1c1c1c] flex justify-between items-center px-6"
  >
    {/* Team 1 Section */}
    <div className="flex items-center">
      <img
        src={logoteam1}
        alt="Team 1 Logo"
        className="w-[85px] h-[85px] object-contain filter brightness-0 invert"
      />
      <div className="flex items-center h-full mx-4">
        <div className="text-gray-600 text-lg leading-none flex items-center">|</div>
      </div>
      <div className="text-white text-center w-[60px]">
        <div className="text-lg font-bold truncate">{blueTeam.teamName || "BLUE"}</div>
        <div className="text-sm font-bold text-gray-400 truncate">{blueTeam?.teamSubtext || "0-0"}</div>
      </div>
      <div className="flex items-center h-full mx-4">
        <div className="text-gray-600 text-lg leading-none flex items-center">|</div>
      </div>
    </div>

    {/* Center Logo */}
    <img
      src={logo}
      alt="Logo"
      className="w-[70px] h-[70px] object-contain filter brightness-0 invert"
    />

    {/* Team 2 Section */}
    <div className="flex items-center">
      <div className="flex items-center h-full mx-4">
        <div className="text-gray-600 text-lg leading-none flex items-center">|</div>
      </div>
      <div className="text-white text-center w-[60px]">
        <div className="text-lg font-bold truncate">{redTeam?.teamName || "RED"}</div>
        <div className="text-sm font-bold text-gray-400 truncate">{redTeam?.teamSubtext || "0-0"}</div>
      </div>
      <div className="flex items-center h-full mx-4">
        <div className="text-gray-600 text-lg leading-none flex items-center">|</div>
      </div>
      <img
        src={logoteam2}
        alt="Team 2 Logo"
        className="w-[85px] h-[85px] object-contain filter brightness-0 invert"
      />
    </div>
  </div>
);

export default MainScoreboard;
