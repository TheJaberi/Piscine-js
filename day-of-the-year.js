function dayOfTheYear(date) {
  // Ensure the input is a Date object
  let inputDate = new Date(date);

  // Create a new date for the first day of the year
  let firstDayOfYear = new Date(inputDate.getFullYear(), 0, 1);

  // Calculate the difference in milliseconds
  let differenceInMilliseconds = inputDate - firstDayOfYear;

  // Convert milliseconds to days
  let differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
}
