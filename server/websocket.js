const WebSocket = require('ws');

// Tạo WebSocket Server tại cổng 30012
const wss = new WebSocket.Server({ port: 30012 }, () => {
  console.log("WebSocket Server đang chạy tại ws://localhost:30012");
});

wss.on('connection', (ws) => {
  ws.send("WS Build Up By ChuChu!");

  ws.on('message', (message) => {
    console.log(`Nhận tin nhắn từ client: ${message}`);
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.action === "new-config") {
      const response = {
        status: "New-Config",
        data: parsedMessage.config
      };
      const responseMessage = JSON.stringify(response);
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(responseMessage);
        }
      });
    }
    
    ws.send(`Bạn vừa gửi: ${message}`);
  });

  ws.on('close', () => {
    console.log("Client đã ngắt kết nối.");
  });
});
