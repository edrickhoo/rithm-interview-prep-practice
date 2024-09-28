// add whatever parameters you deem necessary - good luck!
function values(obj) {
  const valueArr = [];
  for (let key in obj) {
    valueArr.push(obj[key]);
  }
  return valueArr;
}
