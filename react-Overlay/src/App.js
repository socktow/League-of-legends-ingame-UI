import React, { useEffect, useState } from 'react'

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:30012');

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData.status === "New-Config") {
        console.log("Nội dung mới:", parsedData.data);
        setMessages([`Data ws: ${JSON.stringify(parsedData.data)}`]);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  )
}

export default App
