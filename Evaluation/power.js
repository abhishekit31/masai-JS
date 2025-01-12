function checkPower(n) {
  if (2 ** n % n == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
checkPower(1);
checkPower(2);
checkPower(100);
