// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key} = ${value}`)
    .join(", ");
}
