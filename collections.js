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
  if (Array.isArray(value)) {
    return "Array";
  } else if (value instanceof Set) {
    return "Set";
  } else if (value instanceof Map) {
    return "Map";
  } else if (value === null) {
    return "null";
  } else if (typeof value === "object") {
    return "Object";
  } else if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else if (typeof value === "boolean") {
    return "Boolean";
  } else if (typeof value === "undefined") {
    return "undefined";
  } else if (typeof value === "function") {
    return "Function";
  }
}
