function BMICalculator(weight, height) {
  if (height == 0) {
    return "Invalid input, height cannot be zero";
  }
  if (height < 0 || weight <= 0) {
    return "Invalid input, height and weight must be positive numbers";
  }

  let BMI = weight / (height * height);
  return `Your BMI is: ${BMI.toFixed(2)}`;
}
console.log(BMICalculator(70, 1.75));
console.log(BMICalculator(55, 1.6));
console.log(BMICalculator(90, 1.8));
