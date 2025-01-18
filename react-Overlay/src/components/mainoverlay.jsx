import React, { useState } from "react";
import Scoreboard from "./scoreboard/scoreboard";
import useWebSocket from "../services/useWebSocket";

const MainOverlay = () => {
  const [messageWS1, setMessageWS1] = useState(null);
  const [gameTime, setGameTime] = useState("00:00");

  // Cập nhật các team name từ WebSocket
  useWebSocket(
    process.env.REACT_APP_WSBACKEND1,
    process.env.REACT_APP_WSBACKEND2,
    setMessageWS1,
    setGameTime
  );

  return (
    <div>
      <hr />
      <Scoreboard
        gameTime={gameTime}
        blueTeam={messageWS1?.blue || {}}
        redTeam={messageWS1?.red || {}}
      />
    </div>
  );
};

export default MainOverlay;
