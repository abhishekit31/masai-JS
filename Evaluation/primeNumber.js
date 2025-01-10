// write a program to print the prime number between n1 and n2

function findPrime(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(i);
    }
  }
}
findPrime(3, 17);
