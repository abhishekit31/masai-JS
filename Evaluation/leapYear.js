// write a program to check the year is leap or not

function findLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`${year} is leap year`);
  }
}
findLeapYear(2024);
