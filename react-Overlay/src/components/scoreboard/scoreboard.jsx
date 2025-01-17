import React, { useState } from "react";
import DragonTime from "./layout/dragontime";
import DragonPowerPlay from "./layout/dragonpowerplay";
import BaronTime from "./layout/barontime";
import BaronPowerPlay from "./layout/baronpowerplay";
import MainScoreboard from "./layout/mainscoreboard";
import SecondScoreboard from "./layout/secondscoreboard";

const Scoreboard = ({ gameTime, blueTeam, redTeam }) => {
  const [baronPowerPlayActive, setBaronPowerPlayActive] = useState(false);
  const [dragonPowerPlayActive, setDragonPowerPlayActive] = useState(false);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full h-[100px] relative">
        <BaronTime />
        <DragonTime />
        <DragonPowerPlay isActive={dragonPowerPlayActive} />
        <BaronPowerPlay isActive={baronPowerPlayActive} />
        <MainScoreboard blueTeam={blueTeam} redTeam={redTeam} />
        <SecondScoreboard gameTime={gameTime} />
      </div>
    </div>
  );
};

export default Scoreboard;
