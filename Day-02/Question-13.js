function DiscountPriceCalculator(originalPrice) {
  if (originalPrice < 0) {
    return "Invalid price, the price must be a non-negative number.";
  }
  let finalPrice;
  if (originalPrice > 20) {
    finalPrice = originalPrice * 0.9;
  } else {
    finalPrice = originalPrice;
  }
  return `The final price of the item is: ${finalPrice.toFixed(1)}`;
}
console.log(DiscountPriceCalculator(25));
console.log(DiscountPriceCalculator(20));
console.log(DiscountPriceCalculator(15));
