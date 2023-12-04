function matchCron(cronString, date) {
  // Split the cron string into its components
  const [cronMinute, cronHour, cronDay, cronMonth, cronDayOfWeek] = cronString.split(" ");

  // Extract components from the date
  const minute = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const dayOfWeek = date.getDay() || 7; // getDay() returns 0 for Sunday, we adjust to make 1 for Monday

  // Function to check if the cron part matches the date part
  const matches = (cronPart, datePart) =>
    cronPart === "*" || parseInt(cronPart) === datePart;

  // Check if each part of the cron matches the corresponding part of the date
  return (
    matches(cronMinute, minute) &&
    matches(cronHour, hour) &&
    matches(cronDay, day) &&
    matches(cronMonth, month) &&
    matches(cronDayOfWeek, dayOfWeek)
  );
}
