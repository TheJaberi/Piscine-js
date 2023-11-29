function round(number) {
  let intnum = parseInt(number);
  let decimal = number - intnum;
  return decimal >= 0.5 ? intnum + 1 : intnum;
}
function ceil(number) {
  let intnum = parseInt(number);
  return intnum === number ? intnum : intnum + 1;
}
function floor(number) {
  let intnum = parseInt(number);
  return intnum === number ? intnum : intnum - 1;
}
function trunc(number) {
  let intnum = parseInt(number);
  return intnum;
}
