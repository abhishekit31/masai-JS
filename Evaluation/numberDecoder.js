function numberDecoder(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      console.log("TwoThree");
    } else if (i % 2 == 0) {
      console.log("Two");
    } else if (i % 3 == 0) {
      console.log("Three");
    } else {
      console.log(i);
    }
  }
}
numberDecoder(6);
