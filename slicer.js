function slice(arrOrStr, start, end) {
  let result = Array.isArray(arrOrStr) ? [] : "";
  let length = arrOrStr.length;

  // Adjusting negative indices
  start = start < 0 ? length + start : start;
  end = end === undefined ? length : end < 0 ? length + end : end;

  // Clamping start and end to the valid range
  start = start > length ? length : start;
  end = end > length ? length : end < 0 ? 0 : end;

  for (let i = start; i < end; i++) {
    if (Array.isArray(arrOrStr)) {
      result.push(arrOrStr[i]);
    } else {
      result += arrOrStr[i];
    }
  }

  return result;
}
