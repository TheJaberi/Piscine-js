function isValid(date) {
  return date instanceof Date && !isNaN(date);
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    return false;
  }
  return date1 > date2;
}

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    return false;
  }
  return date1 < date2;
}

function isFuture(date) {
  if (!isValid(date)) {
    return false;
  }
  const now = new Date();
  return date > now;
}

function isPast(date) {
  if (!isValid(date)) {
    return false;
  }
  const now = new Date();
  return date < now;
}
