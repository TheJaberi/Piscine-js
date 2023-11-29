function slice(arrOrStr, start, end) {
  let result = Array.isArray(arrOrStr) ? [] : "";
  let length = arrOrStr.length;

  // Handling negative indices
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  end =
    end === undefined
      ? length
      : end < 0
      ? Math.max(length + end, 0)
      : Math.min(end, length);

  for (let i = start; i < end; i++) {
    if (Array.isArray(arrOrStr)) {
      result.push(arrOrStr[i]);
    } else {
      result += arrOrStr[i];
    }
  }

  return result;
}
