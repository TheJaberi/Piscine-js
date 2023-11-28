function arrToSet(arr) {
  return new Set(arr);
}
function arrToStr(arr) {
  return arr.join("");
}
function setToArr(set) {
  return [...set];
}
function setToStr(set) {
  return [...set].join("");
}
function strToArr(str) {
  return [...str];
}
function strToSet(str) {
  return new Set(str);
}
function mapToObj(map) {
  return Object.fromEntries(map);
}
function objToArr(obj) {
  return Object.values(obj);
}
function objToMap(obj) {
  return new Map(Object.entries(obj));
}
function arrToObj(arr) {
  return Object.assign({}, arr);
}
function strToObj(str) {
  return Object.assign({}, str);
}
function superTypeOf(value) {
  if (value === null) {
    return "null";
  }
  if (typeof value === "object" || typeof value === "function") {
    if (value.constructor && value.constructor.name) {
      return value.constructor.name;
    }
  }
  return typeof value;
}
