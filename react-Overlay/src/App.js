  import React, { useEffect, useState } from 'react';
  import { createWebSocket } from './services/wsService';
  import { handleWSData } from './services/wsDataHandler';
  import { timeFormat } from './services/services';
  import MainOverlay from './components/mainoverlay';
  const App = () => {
    const [messageWS1, setMessageWS1] = useState(null);
    const [gameTime, setGameTime] = useState(" ");

    useEffect(() => {
      const socket1 = createWebSocket(process.env.REACT_APP_WSBACKEND1, (event) => {
        const result = handleWSData("wsbackend1", event.data);
        if (result?.type === "newConfig") {
          setMessageWS1(result.value);
        }
      });

      const socket2 = createWebSocket(process.env.REACT_APP_WSBACKEND2, (event) => {
        const result = handleWSData("wsbackend2", event.data);
        if (result?.type === "gameTime") {
          setGameTime(timeFormat(result.value));
        }
      });

      return () => {
        socket1.close();
        socket2.close();
      };
    }, []);

    return (
      <div>
        <h1>WebSocket Messages</h1>
        <div>
          <h2>WS Backend 1</h2>
          <div>
            <strong>WS1 Message:</strong> {messageWS1 ? JSON.stringify(messageWS1) : " "}
          </div>
        </div>
        <div>
          <h2>WS Backend 2</h2>
          <div>
            <strong>WS2 Message:</strong> {gameTime}
          </div>
          <hr/>
          <MainOverlay />
        </div>
      </div>
    );
  };

  export default App;