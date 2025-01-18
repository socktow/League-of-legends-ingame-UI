// services/useWebSocket.js
import { useEffect } from "react";
import { createWebSocket } from "./wsService";
import { handleWSData } from "./wsDataHandler";
import { timeFormat } from "./services";

const useWebSocket = (backend1URL, backend2URL, onMessage1, onMessage2) => {
  useEffect(() => {
    const socket1 = createWebSocket(backend1URL, (event) => {
      const result = handleWSData("wsbackend1", event.data);
      if (result?.type === "newConfig") {
        onMessage1(result.value);
      }
    });

    const socket2 = createWebSocket(backend2URL, (event) => {
      const result = handleWSData("wsbackend2", event.data);
      if (result?.type === "gameTime") {
        onMessage2(timeFormat(result.value));
      }
    });

    return () => {
      socket1.close();
      socket2.close();
    };
  }, [backend1URL, backend2URL, onMessage1, onMessage2]);
};

export default useWebSocket;
