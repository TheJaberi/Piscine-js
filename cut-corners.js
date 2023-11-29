function round(number) {
  let numStr = number.toString();
  let [intPart, decimalPart] = numStr.split(".");
  decimalPart = decimalPart ? `0.${decimalPart}` : "0";
  return decimalPart >= 0.5 ? Number(intPart) + 1 : Number(intPart);
}

function ceil(number) {
  let numStr = number.toString();
  if (numStr.includes(".")) {
    let [intPart] = numStr.split(".");
    return Number(intPart) + 1;
  }
  return number;
}

function floor(number) {
  let numStr = number.toString();
  let [intPart] = numStr.split(".");
  return Number(intPart);
}

function trunc(number) {
  let numStr = number.toString();
  let [intPart] = numStr.split(".");
  return Number(intPart);
}
