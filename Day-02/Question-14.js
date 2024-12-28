function LargerNumber(num1, num2) {
  if (num1 > num2) {
    return `${num1} is larger than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is larger than ${num1}`;
  } else if (num1 == num2) {
    return "Both numbers are equal";
  }
}
console.log(LargerNumber(5, 10));
console.log(LargerNumber(7, 7));
console.log(LargerNumber(-5, -10));
