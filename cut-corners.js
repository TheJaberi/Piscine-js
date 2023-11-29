function reduceLargeNumber(number) {
  const largeNumber = 0xfffffffff;
  while (number > largeNumber) {
    number -= largeNumber;
  }
  return number;
}
function round(number) {
  let negative = number < 0;
  if (negative) {
    number = -number;
  }

  let intPart = 0;
  while (number >= 1) {
    number--;
    intPart++;
  }

  if (number < 0.5) {
    return negative ? -intPart : intPart;
  } else {
    return negative ? -(intPart + 1) : intPart + 1;
  }
}
function ceil(number) {
  if (number === 0) return 0;

  let negative = number < 0;
  if (negative) {
    number = -number;
  }

  let intPart = 0;
  while (number > 0) {
    number--;
    intPart++;
  }

  if (!negative && number !== intPart) {
    intPart++;
  }

  return negative ? -intPart : intPart;
}

function floor(number) {
  let negative = number < 0;
  if (negative) {
    number = -number;
  }

  let intPart = 0;
  while (number >= 1) {
    number--;
    intPart++;
  }

  return negative ? -(intPart + 1) : intPart;
}
function trunc(number) {
  number = reduceLargeNumber(number);

  let negative = number < 0;
  if (negative) {
    number = -number;
  }

  let intPart = 0;
  while (number >= 1) {
    number--;
    intPart++;
  }

  return negative ? -intPart : intPart;
}
