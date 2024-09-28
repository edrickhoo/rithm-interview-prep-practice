// add whatever parameters you deem necessary - good luck!
function includes(data, value, startIndx = -1) {
  if (typeof data === "string" || Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === value && i > startIndx) {
        return true;
      }
    }
    return false;
  }

  const objAsArray = Object.values(data);
  for (let i = 0; i < objAsArray.length; i++) {
    if (objAsArray[i] === value) {
      return true;
    }
  }
  return false;
}
