import React from 'react';

const DragonPowerPlay = ({ isActive }) => (
  isActive && (
    <div id="dragon-power-play" className="absolute w-[199px] h-[71px] left-[1567px] bg-[#b3f549]" />
  )
);

export default DragonPowerPlay;
