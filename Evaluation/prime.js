// write a program to chekc whether the number is prime or not

function checkPrime(num) {
  if (num <= 1) {
    console.log("Not prime");
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("Not Prime");
      return false;
    }
  }
  console.log("prime");
  return true;
}
checkPrime(2);
