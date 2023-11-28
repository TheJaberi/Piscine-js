function repeat(str, num) {
  if (str == "") {
    return "";
  }
  if (num <= 0) {
    return "";
  }
  for (let i = 0; i < num; i++) {
    str += str;
  }
  return str;
}
