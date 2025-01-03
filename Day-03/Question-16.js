function zigZagMatrix(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  const result = [];

  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      for (let j = M - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    } else {
      for (let j = 0; j < M; j++) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2],
];

console.log(zigZagMatrix(matrix).join(" "));
