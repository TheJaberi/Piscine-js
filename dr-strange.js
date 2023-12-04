function addWeek(date) {
  // Define the weekdays in the new 14-day week format
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  // Epoch date (year 1, January 1st)
  const epoch = new Date("0001-01-01T00:00:00Z");

  // Calculate the difference in days since the epoch
  const diffInTime = date.getTime() - epoch.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

  // Get the weekday index
  const weekdayIndex = diffInDays % 14;

  return weekdays[weekdayIndex];
}
function timeTravel({ date, hour, minute, second }) {
  // Create a new date object based on the provided date
  const newDate = new Date(date);

  // Set the time components if they are provided
  if (hour !== undefined) newDate.setHours(hour);
  if (minute !== undefined) newDate.setMinutes(minute);
  if (second !== undefined) newDate.setSeconds(second);

  return newDate;
}
