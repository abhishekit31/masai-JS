function Stored2DArray(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < M; j++) {
      row += i + j + " ";
    }
    console.log(row);
  }
}
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let N = 3;
let M = 2;
Stored2DArray(3, 2, arr);
