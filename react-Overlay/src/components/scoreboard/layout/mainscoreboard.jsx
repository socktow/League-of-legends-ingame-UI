import React from 'react';
import logo from '../../../assets/logo.webp';
import logoteam1 from '../../../assets/team/MESlogo_std.webp';
import logoteam2 from '../../../assets/team/Team_Secret_Whaleslogo_std.webp';

const MainScoreboard = () => (
  <div id="main-scoreboard" className="absolute w-[1220px] h-[71px] left-[351px] bg-[#1c1c1c] flex justify-center items-center">
    <img src={logo} alt="Logo" className="w-[70px] h-[70px] object-contain filter brightness-0 invert" />

    <div className="absolute left-0 top-[50%] transform -translate-y-[50%]">
      <img src={logoteam1} alt="Team 1 Logo" className="w-[85px] h-[85px] object-contain filter brightness-0 invert" />
    </div>

    <div className="absolute right-0 top-[50%] transform -translate-y-[50%]">
      <img src={logoteam2} alt="Team 2 Logo" className="w-[85px] h-[85px] object-contain filter brightness-0 invert" />
    </div>
  </div>
);

export default MainScoreboard;
