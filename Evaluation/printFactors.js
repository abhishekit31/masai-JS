// write a code to find the facors of given number(n)

function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}
printFactors(10);

// count the factor of giveb number

function printFactors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  console.log(count);
}
printFactors(10);

// write a code to check the number is prime or not

function printFactors(n) {
  let fact = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      fact++;
    }
  }
  fact == 2 ? console.log("Prime") : console.log("Not Prime");
}
printFactors(4);
