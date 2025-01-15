export const createWebSocket = (url, onMessage) => {
    const socket = new WebSocket(url);
  
    socket.onmessage = (event) => {
      if (onMessage) {
        onMessage(event);
      }
    };
  
    socket.onopen = () => {
      console.log(`WebSocket connected: ${url}`);
    };
  
    socket.onerror = (error) => {
      console.error(`WebSocket error: ${url}`, error);
    };
  
    socket.onclose = () => {
      console.log(`WebSocket disconnected: ${url}`);
    };
  
    return socket;
  };
  