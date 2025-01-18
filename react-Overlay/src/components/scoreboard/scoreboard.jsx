import React, { useState } from "react";
import DragonTime from "./layout/dragontime";
import DragonPowerPlay from "./layout/dragonpowerplay";
import BaronTime from "./layout/barontime";
import BaronPowerPlay from "./layout/baronpowerplay";
import MainScoreboard from "./layout/mainscoreboard";
import SecondScoreboard from "./layout/secondscoreboard";

const Scoreboard = ({ gameTime }) => {
  const [baronPowerPlayActive, setBaronPowerPlayActive] = useState(false);
  const [dragonPowerPlayActive, setDragonPowerPlayActive] = useState(false);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full h-[100px] relative">
        <BaronTime />
        <DragonPowerPlay isActive={dragonPowerPlayActive} />
        <DragonTime />
        <BaronPowerPlay isActive={baronPowerPlayActive} />
        <MainScoreboard />
        <SecondScoreboard gameTime={gameTime} />
      </div>
    </div>
  );
};

export default Scoreboard;
