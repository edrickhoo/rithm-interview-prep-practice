// add whatever parameters you deem necessary - good luck!
function entries(obj) {
  const arr = [];
  for (const key in obj) {
    const entry = [key, obj[key]];
    arr.push(entry);
  }
  return arr;
}
