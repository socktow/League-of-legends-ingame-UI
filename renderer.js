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

    // Thêm giá trị cho avatar
    const blueAvatarInput = document.getElementById("avatarblue");
    const redAvatarInput = document.getElementById("avatarredURL");
    if (data.blueAvatar) {
      blueAvatarInput.value = data.blueAvatar; // Giả sử data.blueAvatar chứa đường dẫn đến ảnh
    }
    if (data.redAvatar) {
      redAvatarInput.value = data.redAvatar; // Giả sử data.redAvatar chứa đường dẫn đến ảnh
    }

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
  blueTeamInputs.forEach((input, index) => {
    playerNames.push(input.value.trim() || `Player ${index + 1}`);
  });

  redTeamInputs.forEach((input, index) => {
    playerNames.push(input.value.trim() || `Player ${index + 6}`);
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

  const blueConfig = {
    color: blueColor,
    score: document.getElementById("blueScore").value,
    teamName: document.getElementById("blueTeamName").value,
    teamSubtext: document.getElementById("blueTeamSubtext").value,
    avatar: document.getElementById("avatarblue").value,
  };

  const redConfig = {
    color: redColor,
    score: document.getElementById("redScore").value,
    teamName: document.getElementById("redTeamName").value,
    teamSubtext: document.getElementById("redTeamSubtext").value,
    avatar: document.getElementById("avatarred").value,
  };

  const config = {
    playerNames,
    blue: blueConfig,
    red: redConfig,
  };

  // Gửi nội dung mới qua WebSocket
  ws.send(JSON.stringify({ action: "new-config", config }));
});

