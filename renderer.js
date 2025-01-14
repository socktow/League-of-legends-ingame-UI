fetch("config.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("blueColor").value = data.blueColor;
    document.getElementById("redColor").value = data.redColor;

    // Set additional fields
    document.getElementById("blueTeamName").value = data.blueTeamName;
    document.getElementById("blueScore").value = data.blueScore;
    document.getElementById("blueTeamSubtext").value = data.blueTeamSubtext;
    document.getElementById("redTeamName").value = data.redTeamName;
    document.getElementById("redScore").value = data.redScore;
    document.getElementById("redTeamSubtext").value = data.redTeamSubText;

    const playerNamesList = document.getElementById("playerNames");
    data.names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      playerNamesList.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading config:", error));

// Kết nối WebSocket
const ws = new WebSocket("ws://localhost:30012");

function savePlayerNames() {
  const playerNames = [];
  const blueTeamInputs = document.querySelectorAll("#blueTeam input");
  const redTeamInputs = document.querySelectorAll("#redTeam input");

  // Lấy tên từ đội xanh
  blueTeamInputs.forEach((input, index) => {
    playerNames.push(input.value.trim() || `Player ${index + 1}`); // Nếu không có tên mới, sử dụng tên mặc định
  });

  // Lấy tên từ đội đỏ
  redTeamInputs.forEach((input, index) => {
    playerNames.push(input.value.trim() || `Player ${index + 6}`); // Nếu không có tên mới, sử dụng tên mặc định
  });

  if (playerNames.length > 0) {
    console.log(playerNames);
  } else {
    console.warn("Không có tên người chơi nào được nhập.");
  }
}

document.getElementById("saveConfig").addEventListener("click", () => {
  const blueColor = document.getElementById("blueColor").value;
  const redColor = document.getElementById("redColor").value;
  const playerNames = [
    ...Array.from(document.querySelectorAll("#blueTeam input")).map(
      (input) => input.value
    ),
    ...Array.from(document.querySelectorAll("#redTeam input")).map(
      (input) => input.value
    ),
  ];

  const config = {
    blueColor,
    redColor,
    playerNames,
    blueScore: document.getElementById("blueScore").value,
    blueTeamName: document.getElementById("blueTeamName").value,
    blueTeamSubtext: document.getElementById("blueTeamSubtext").value,
    redScore: document.getElementById("redScore").value,
    redTeamName: document.getElementById("redTeamName").value,
    redTeamSubtext: document.getElementById("redTeamSubtext").value,
  };

  // Gửi nội dung mới qua WebSocket
  ws.send(JSON.stringify({ action: "new-config", config }));
});