function CalculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return "Invalid number, base and height must be positive numbers.";
  } else {
    let area = (base * height) / 2;
    return `The area of the triangle is: ${area.toFixed(1)}`;
  }
}
console.log(CalculateTriangleArea(10, 5));
console.log(CalculateTriangleArea(0, 15));
console.log(CalculateTriangleArea(8, 0));
