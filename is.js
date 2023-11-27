const is = {
  num: function (value) {
    return typeof value === "number";
  },
  nan: function (value) {
    return Number.isNaN(value);
  },
  str: function (value) {
    return typeof value === "string";
  },
  bool: function (value) {
    return typeof value === "boolean";
  },
  undef: function (value) {
    return typeof value === "undefined";
  },
  def: function (value) {
    return typeof value !== "undefined";
  },
  arr: function (value) {
    return Array.isArray(value);
  },
  obj: function (value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  },
  fun: function (value) {
    return typeof value === "function";
  },
  truthy: function (value) {
    return !!value;
  },
  falsy: function (value) {
    return !value;
  },
};
/*
const is = {
    num: value => typeof value === 'number',
    nan: value => Number.isNaN(value),
    str: value => typeof value === 'string',
    bool: value => typeof value === 'boolean',
    undef: value => typeof value === 'undefined',
    def: value => typeof value !== 'undefined',
    arr: value => Array.isArray(value),
    obj: value => typeof value === 'object' && value !== null && !Array.isArray(value),
    fun: value => typeof value === 'function',
    truthy: value => !!value,
    falsy: value => !value
};
*/
