import React from "react";
import useWebSocket from "../services/useWebSocket";
import Scoreboard from "./scoreboard/scoreboard";
import { timeFormat } from "../services/services";
const MainOverlay = () => {
  // Sử dụng hook WebSocket cho cả hai WebSocket
  const { messageWS1, messageWS2 } = useWebSocket(
    process.env.REACT_APP_WSBACKEND1,
    process.env.REACT_APP_WSBACKEND2
  );

  return (
    <div>
      <div>
        {messageWS1 ? (
          <Scoreboard
            gameTime={timeFormat(messageWS2?.state?.gameTime)}
            blueTeam={messageWS1?.data?.blue || {}}
            redTeam={messageWS1?.data?.red || {}}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MainOverlay;
