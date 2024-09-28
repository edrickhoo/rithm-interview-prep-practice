// add whatever parameters you deem necessary - good luck!
function keys(obj) {
  let keysArr = [];
  for (let property in obj) {
    keysArr.push(property);
  }
  return keysArr;
}
