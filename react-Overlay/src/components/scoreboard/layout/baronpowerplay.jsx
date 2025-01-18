import React from 'react';

const BaronPowerPlay = ({ isActive }) => (
  isActive && (
    <div id="baron-power-play" className="absolute w-[352px] h-[71px] bg-[#be1e37]" />
  )
);

export default BaronPowerPlay;
