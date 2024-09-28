// add whatever parameters you deem necessary - good luck!
function removeFromString(str, start, numToRemove) {
  const splitStr = str.split("");
  splitStr.splice(start, numToRemove);
  return splitStr.join("");
}
