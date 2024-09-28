// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
  let lowest = Infinity;
  let highest = -Infinity;

  for (const key in obj) {
    if (key < lowest) lowest = parseInt(key);
    if (key > highest) highest = parseInt(key);
  }
  return [lowest, highest];
}
