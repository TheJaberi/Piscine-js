is.num = function (value) {
  return typeof value === "number";
};
is.nan = function (value) {
  return Number.isNaN(value);
};
is.str = function (value) {
  return typeof value === "string";
};
is.bool = function (value) {
  return typeof value === "boolean";
};
is.undef = function (value) {
  return typeof value === "undefined";
};
is.def = function (value) {
  return typeof value !== "undefined";
};
is.arr = function (value) {
  return Array.isArray(value);
};
is.obj = function (value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};
is.fun = function (value) {
  return typeof value === "function";
};
is.truthy = function (value) {
  return !!value;
};
is.falsy = function (value) {
  return !value;
};

/*
    is.num: value => typeof value === 'number',
    is.nan: value => Number.isNaN(value),
    is.str: value => typeof value === 'string',
    is.bool: value => typeof value === 'boolean',
    is.undef: value => typeof value === 'undefined',
    is.def: value => typeof value !== 'undefined',
    is.arr: value => Array.isArray(value),
    is.obj: value => typeof value === 'object' && value !== null && !Array.isArray(value),
    is.fun: value => typeof value === 'function',
    is.truthy: value => !!value,
    is.falsy: value => !value
*/
