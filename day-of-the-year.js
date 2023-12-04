function dayOfTheYear(date) {
  let days = 1;
  while (!isFirstDay(date)) {
    date.setDate(date.getDate() - 1);
    days++;
  }
  return days;
}

function isFirstDay(date) {
  return date.getDate() === 1 && date.getMonth() === 0;
}
