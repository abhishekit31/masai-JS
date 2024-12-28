function SimpleInterestCalculator(P, R, T) {
  if (P < 0 || R < 0 || T < 0) {
    return "Invalid input, all values must be non-negative.";
  }
  let SI = (P * R * T) / 100;
  return `The simple interest is: ${SI.toFixed(1)}`;
}
console.log(SimpleInterestCalculator(1000, 5, 3));
console.log(SimpleInterestCalculator(1500, 7, 5));
console.log(SimpleInterestCalculator(0, 6, 2));
