function round(number) {
  const { intPart, decimalPart } = separateNumber(number);
  if (number >= 0) {
    return decimalPart >= 0.5 ? intPart + 1 : intPart;
  } else {
    return -decimalPart >= 0.5 ? intPart - 1 : intPart;
  }
}

function ceil(number) {
  const { intPart, decimalPart } = separateNumber(number);
  if (number >= 0) {
    return decimalPart > 0 ? intPart + 1 : intPart;
  } else {
    return intPart;
  }
}

function floor(number) {
  const { intPart, decimalPart } = separateNumber(number);
  if (number >= 0) {
    return intPart;
  } else {
    return decimalPart < 0 ? intPart - 1 : intPart;
  }
}

function trunc(number) {
  const { intPart } = separateNumber(number);
  return intPart;
}

function separateNumber(num) {
  let negative = num < 0;
  num = Math.abs(num);
  let intPart = 0;
  while (intPart < num - 1) intPart++;

  let decimalPart = num - intPart;
  return {
    intPart: negative ? -intPart : intPart,
    decimalPart: negative ? -decimalPart : decimalPart,
  };
}
