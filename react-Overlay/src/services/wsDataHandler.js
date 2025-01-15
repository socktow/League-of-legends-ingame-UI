export const handleWSData = (socketName, data) => {
  const parsedData = JSON.parse(data);
  // ingame localhost 5000
  if (socketName === "wsbackend2" && parsedData?.state?.gameTime) {
    return { type: "gameTime", value: parsedData.state.gameTime };
  }
  // dashboard Localhost30012
  if (parsedData.status === "New-Config") {
    return { type: "newConfig", value: parsedData.data };
  }

  return null;
};
