export const handleWSData = (socketName, data) => {
  let parsedData;
  if (data && (data.startsWith("{") || data.startsWith("["))) {
    try {
      parsedData = JSON.parse(data);
    } catch (error) {
      // Nếu không thể parse, log ra cảnh báo
      console.warn("Invalid JSON data received:", data);
      return { type: "keepAlive", value: data }; // Xử lý dữ liệu không phải JSON
    }
  } else {
    // Nếu dữ liệu không phải JSON, xử lý dữ liệu thô như là một thông báo đơn giản
    console.warn("Received non-JSON data:", data);
    return { type: "keepAlive", value: data }; // Xử lý dữ liệu không phải JSON
  }

  // Xử lý dữ liệu JSON hợp lệ nếu có
  if (socketName === "wsbackend2" && parsedData?.state?.gameTime) {
    return { type: "gameTime", value: parsedData.state.gameTime };
  }

  if (parsedData.status === "New-Config") {
    return { type: "newConfig", value: parsedData.data };
  }

  return null;
};
