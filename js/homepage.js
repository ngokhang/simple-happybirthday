const usernameInp = document.getElementById("usernameInp");
const dobInp = document.getElementById("dobInp");
const formInp = document.querySelector(".form");
formInp.addEventListener("submit", (e) => {
  localStorage.setItem("usernameInp", usernameInp.value);
  localStorage.setItem("dobInp", dobInp.value);
});

function validateDate(inputDate) {
  // First, split the input date into day, month, and year components
  const dateParts = inputDate.split("/");
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  // Check that the day, month, and year are all valid numbers
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  // Convert the day, month, and year strings to numbers
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  // Check that the year is a valid 2-digit year (between 00 and 99)
  if (yearNum < 0 || yearNum > 99) {
    return false;
  }

  // Check that the month is between 1 and 12
  if (monthNum < 1 || monthNum > 12) {
    return false;
  }

  // Check that the day is a valid day of the month, taking into account leap years
  const daysInMonth = new Date(yearNum + 2000, monthNum, 0).getDate();
  if (dayNum < 1 || dayNum > daysInMonth) {
    return false;
  }

  // If we've made it this far, the date is valid!
  return true;
}
