function firstDayWeek(weekNumber, year) {
  // Parse the year and create a date object for January 1st of that year
  const yearStart = new Date(year, 0, 1);

  // Calculate the day of the week for January 1st (0 for Sunday, 1 for Monday, etc.)
  const firstDayOfYear = yearStart.getDay();

  // Calculate the difference to the next Monday (first day of the week)
  const daysToNextMonday = firstDayOfYear === 0 ? 1 : 8 - firstDayOfYear;

  // Calculate the date of the first Monday of the year
  const firstMondayOfYear = new Date(
    year,
    0,
    1 - firstDayOfYear + daysToNextMonday
  );

  // Calculate the date of the first day of the specified week
  const weekStart = new Date(firstMondayOfYear);
  weekStart.setDate(firstMondayOfYear.getDate() + (weekNumber - 1) * 7);

  // If the start of the week is in the previous year, return January 1st of the specified year
  if (weekStart.getFullYear() < year) {
    return `01-01-${year}`;
  }

  // Format the date in dd-mm-yyyy format
  const day = String(weekStart.getDate()).padStart(2, "0");
  const month = String(weekStart.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const formattedDate = `${day}-${month}-${weekStart.getFullYear()}`;

  return formattedDate;
}
