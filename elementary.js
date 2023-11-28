function multiply(a, b) {
  let result = 0;
  const positive = Math.abs(b) === b;
  for (let i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a;
  }
  return result;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  const absA = Math.abs(a);
  const absB = Math.abs(b);
  let result = 0;
  let sum = absB;

  while (sum <= absA) {
    sum += absB;
    result++;
  }

  return a < 0 === b < 0 ? result : -result;
}
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot modulo by zero");
  }

  const divisionResult = divide(a, b);
  return a - multiply(divisionResult, b);
}
