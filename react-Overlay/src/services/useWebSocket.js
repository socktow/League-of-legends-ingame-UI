import { useEffect, useState } from 'react';

function useWebSocket(url1, url2) {
  const [messageWS1, setMessageWS1] = useState(null);
  const [messageWS2, setMessageWS2] = useState(null);

  useEffect(() => {
    const socket1 = new WebSocket(url1);
    const socket2 = new WebSocket(url2);

    socket1.onmessage = (event) => {
      try {
        const jsonMessage = JSON.parse(event.data);
        if (jsonMessage.status !== "new-config") {
          setMessageWS1(jsonMessage);
        }
      } catch {
        setMessageWS1(event.data);
      }
    };

    socket2.onmessage = (event) => {
      try {
        const jsonMessage = JSON.parse(event.data);
        if (jsonMessage.type !== "keepAlive") {
          setMessageWS2(jsonMessage);
        }
      } catch {
        setMessageWS2(event.data);
      }
    };

    socket1.onclose = () => {
      console.log('WebSocket 1 closed');
    };

    socket2.onclose = () => {
      console.log('WebSocket 2 closed');
    };

    socket1.onerror = (error) => {
      console.error('WebSocket 1 Error:', error);
    };

    socket2.onerror = (error) => {
      console.error('WebSocket 2 Error:', error);
    };

    // Clean up khi component unmount
    return () => {
      socket1.close();
      socket2.close();
    };
  }, [url1, url2]);

  return { messageWS1, messageWS2 };
}

export default useWebSocket;
