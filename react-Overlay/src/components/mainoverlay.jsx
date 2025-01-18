// MainOverlay.jsx
import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard/scoreboard';
import { createWebSocket } from '../services/wsService';
import { handleWSData } from '../services/wsDataHandler';
import { timeFormat } from '../services/services';

const MainOverlay = () => {
  const [gameTime, setGameTime] = useState(" ");

  useEffect(() => {
    const socket2 = createWebSocket(
      process.env.REACT_APP_WSBACKEND2,
      (event) => {
        const result = handleWSData("wsbackend2", event.data);
        if (result?.type === "gameTime") {
          setGameTime(timeFormat(result.value)); // Cập nhật gameTime
        }
      }
    );

    return () => {
      socket2.close();
    };
  }, []);

  return (
    <div>
      {/* Truyền gameTime vào Scoreboard */}
      <Scoreboard gameTime={gameTime} />
    </div>
  );
};

export default MainOverlay;
